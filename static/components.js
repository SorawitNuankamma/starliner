a = document.createElement('a')

class Component {
  el = null
  constructor(element){
    this.el = element
  }
  class(className){
    this.el.classList.add(className)
    return this
  }
  child(...elements){
    elements.forEach((el) => {
      this.el.appendChild(el)
    })
    return this
  }
  type(type){
    this.el.type = type
    return this
  }
  name(name){
    this.el.name = name
    return this
  }
  value(value){
    this.el.value = value
    return this
  }
  content(content){
    this.el.innerHTML = content
    return this
  }
  get(){
    return this.el
  }
}

class CF {
  static create(name){
    return new Component(document.createElement(name))
  }
  static createInput(name, type, value, className){
    const el = document.createElement('input')
    el.name = name
    el.type = type
    el.value = value
    el.classList.add(className)
    return new Component(el)
  }
  static createLabel(content){
    const el = document.createElement('label')
    el.innerHTML = content
    return new Component(el)
  }
}


class ComponentUtil {
  static getRadioChoiceElement(name, value, label) {
    return CF.create('div')
    .child(
      CF.createInput(name,'radio', value, 'radio-btn').get(),
      CF.createLabel(label).get()
    ).get()
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
  static observedAttributes = ["question", "choices", "correct_choice", "choices_reason"];

  choices = [];
  question = "default question"
  correct_choice = 1
  message = "none"
  choices_reason = []

  submitQuestion = (e) => {
    e.preventDefault()
    let valueIndex = 0
    this.shadowRoot.querySelectorAll('input').forEach((el, i) => {
      if(el.checked){
        valueIndex = i
      }
    })
    const messageSuccessEl = this.shadowRoot.querySelector('.message-success')
    const messageErrorEl = this.shadowRoot.querySelector('.message-err')
    if(valueIndex == this.correct_choice-1){
      messageSuccessEl.style.visibility = "visible"
      messageErrorEl.style.visibility = "hidden"
    }else{
      messageSuccessEl.style.visibility = "hidden"
      messageErrorEl.style.visibility = "visible"
    }
    let reasonContainer = this.shadowRoot.querySelector('.message-reason')
      console.log(reasonContainer)
    if(this.choices_reason.length>0){
      let reasonContainer = this.shadowRoot.querySelector('.message-reason')
      reasonContainer.innerHTML = ""
      reasonContainer.appendChild(CF.create('div').class('reason-text').content(this.choices_reason[valueIndex]).get())
    }
  }


  constructor() {
    // Always call super first in constructor
    super();
    let template = document.getElementById("exercise-quiz");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    this.style.display = "block"
    shadowRoot.appendChild(templateContent.cloneNode(true));
    let el = this.shadowRoot.querySelector("form")
    el.addEventListener('submit',this.submitQuestion)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name)
    if (name == "choices") {
      this.choices = newValue.split(",");
    }
    if (name == "question"){
      this.question = newValue
    }
    if (name == "correct_choice"){
      this.correct_choice = parseInt(newValue)
    }
    if (name == "choices_reason"){
      this.choices_reason = newValue.split(",")
    }
    this.render();
  }

  render() {
    let questionLabel = this.shadowRoot.querySelector(".legend")
    questionLabel.innerHTML = this.question
    let container = this.shadowRoot.querySelector(".container");
    container.innerHTML = ""
    this.choices.forEach((choice) => {
      container.appendChild(
        ComponentUtil.getRadioChoiceElement("choice", choice, choice)
      );
    });
  }
}

customElements.define("course-link", CourseLink);
customElements.define("exercise-quiz", ExcerciseQuiz);
