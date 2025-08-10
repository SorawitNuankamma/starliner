a = document.createElement("a");

class Component {
  el = null;
  constructor(element) {
    this.el = element;
  }
  class(className) {
    this.el.classList.add(className);
    return this;
  }
  child(...elements) {
    elements.forEach((el) => {
      this.el.appendChild(el);
    });
    return this;
  }
  type(type) {
    this.el.type = type;
    return this;
  }
  name(name) {
    this.el.name = name;
    return this;
  }
  value(value) {
    this.el.value = value;
    return this;
  }
  content(content) {
    this.el.innerHTML = content;
    return this;
  }
  get() {
    return this.el;
  }
}

class CF {
  static create(name) {
    return new Component(document.createElement(name));
  }
  static createInput(name, type, value, className) {
    const el = document.createElement("input");
    el.name = name;
    el.type = type;
    el.value = value;
    el.classList.add(className);
    return new Component(el);
  }
  static createLabel(content) {
    const el = document.createElement("label");
    el.innerHTML = content;
    return new Component(el);
  }
}

class ComponentUtil {
  static getRadioChoiceElement(name, value, label) {
    return CF.create("div")
      .child(
        CF.createInput(name, "radio", value, "radio-btn").get(),
        CF.createLabel(label).get()
      )
      .get();
  }
}

class CourseLink extends HTMLElement {
  static observedAttributes = ["href"];

  innerContent = "";
  attributeValue = {
    href: "/course",
  };

  constructor() {
    // Always call super first in constructor
    super();
    this.innerContent = this.innerHTML;
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.attributeValue[name] = newValue;
    this.render();
  }

  render() {
    this.innerHTML = `
      <li class="course-item">
        <a href="${this.attributeValue.href}" >${this.innerContent}
        </a>
      </li>
    `;
  }
}

class ExcerciseQuiz extends HTMLElement {
  static observedAttributes = [
    "exercise_name",
    "exercise_label",
    // specifict attribute
    "choices",
    "selected_choice",
    "correct_choice",
    "choices_reason",
  ];

  // attribute
  exercise_name = "";
  exercise_label = "default question";
  status = "none"
  // specifict attribute
  choices = [];
  selected_choice = 0;
  correct_choice = 1;
  choices_reason = [];

  // only exist on exercise component that can automaticly check for answer
  getSubmissionStatus = () => {
    return this.selected_choice == this.correct_choice ? "passed" : "failed"
  }

  submitQuestion = (e) => {
    e.preventDefault();
    fetch("/api/submit-submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        exercise_name: this.exercise_name,
        submission_type: "choices",
        content: String(this.selected_choice),
        status: this.getSubmissionStatus(),
        feedback: "",
      }),
    }).catch((err) => console.error(err));
    this.render();
  };

  constructor() {
    // Always call super first in constructor
    super();
    let template = document.getElementById("exercise-single-choices");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    this.style.display = "block";
    shadowRoot.appendChild(templateContent.cloneNode(true));
    let el = this.shadowRoot.querySelector("form");
    el.addEventListener("submit", this.submitQuestion);
  }

  connectedCallback() {
    fetch("/api/submissions")
      .then((res) => res.json())
      .then((submissions) => {
        const matches = submissions.filter(
          (s) => s.exercise_name === this.exercise_name
        );
        if (matches.length > 0) {
          const submission = matches[matches.length - 1];
          const status = submission.status
          const choice = parseInt(submission.content);
          if (!isNaN(choice)) {
            this.selected_choice = choice;
            this.status = status;
            this.shadowRoot.querySelectorAll("input").forEach((el, i) => {
              el.checked = i + 1 == this.selected_choice;
            });
            this.render();
          }
        }
      })
      .catch((err) => console.error(err));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
    if (name == "exercise_name"){
      this.exercise_name = newValue
    }
    if (name == "exercise_label") {
      this.exercise_label = newValue;
    }
    if (name == "choices") {
      this.choices = newValue.split(",");
    }
    if (name == "selected_choice") {
      this.selected_choice = parseInt(newValue);
    }
    if (name == "correct_choice") {
      this.correct_choice = parseInt(newValue);
    }
    if (name == "choices_reason") {
      this.choices_reason = newValue.split(",");
    }
    this.initialRender();
  }

  initialRender() {
    let questionLabel = this.shadowRoot.querySelector(".legend");
    questionLabel.innerHTML = this.exercise_label;
    let container = this.shadowRoot.querySelector(".container");
    container.innerHTML = "";
    console.log(this.choices);
    this.choices.forEach((choice, i) => {
      let choiceElement = ComponentUtil.getRadioChoiceElement(
        `${this.exercise_name}_choice`,
        choice,
        choice
      );
      choiceElement.addEventListener("click", (e) => {
        this.selected_choice = i + 1;
        this.shadowRoot.querySelectorAll("input").forEach((el, i) => {
          if (i + 1 == this.selected_choice) {
            el.checked = true;
          } else {
            el.checked = false;
          }
        });
      });
      container.appendChild(choiceElement);
    });

    this.render();
  }

  render() {
    if (this.selected_choice == 0) return;
    const messageSuccessEl = this.shadowRoot.querySelector(".message-success");
    const messageErrorEl = this.shadowRoot.querySelector(".message-err");
    // only call on component that can auto check answer
    this.status = this.getSubmissionStatus()
    
    if (this.status == "success") {
      messageSuccessEl.style.visibility = "visible";
      messageErrorEl.style.visibility = "hidden";
    } else {
      messageSuccessEl.style.visibility = "hidden";
      messageErrorEl.style.visibility = "visible";
    }
    if (this.choices_reason.length > 0) {
      let reasonContainer = this.shadowRoot.querySelector(".message-reason");
      reasonContainer.innerHTML = "";
      reasonContainer.appendChild(
        CF.create("div")
          .class("reason-text")
          .content(this.choices_reason[valueIndex])
          .get()
      );
    }
  }
}

class ExerciseSubjective extends HTMLElement {
  static observedAttributes = ["exercise_name", "exercise_label"];

  exercise_name = "";
  exercise_label = "default question";
  content = "";

  submitQuestion = (e) => {
    e.preventDefault();
    const answerEl = this.shadowRoot.querySelector("textarea");
    this.content = answerEl.value;
    fetch("/api/submit-submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        exercise_name: this.exercise_name,
        submission_type: "text",
        content: this.content,
        status: "submitted",
        feedback: "",
      }),
    }).catch((err) => console.error(err));
  };

  constructor() {
    super();
    let template = document.getElementById("exercise-subjective");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    this.style.display = "block";
    shadowRoot.appendChild(templateContent.cloneNode(true));
    this.shadowRoot
      .querySelector("form")
      .addEventListener("submit", this.submitQuestion);
  }

  connectedCallback() {
    fetch("/api/submissions")
      .then((res) => res.json())
      .then((submissions) => {
        const matches = submissions.filter(
          (s) => s.exercise_name === this.exercise_name
        );
        if (matches.length > 0) {
          const submission = matches[matches.length - 1];
          this.content = submission.content;
          this.shadowRoot.querySelector("textarea").value = this.content;
        }
      })
      .catch((err) => console.error(err));
    this.initialRender();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "exercise_name") {
      this.exercise_name = newValue;
    }
    if (name == "exercise_label") {
      this.exercise_label = newValue;
    }
    this.initialRender();
  }

  initialRender() {
    let questionLabel = this.shadowRoot.querySelector(".legend");
    questionLabel.innerHTML = this.exercise_label;
  }
}

customElements.define("course-link", CourseLink);
customElements.define("exercise-single-choices", ExcerciseQuiz);
customElements.define("exercise-subjective", ExerciseSubjective);
