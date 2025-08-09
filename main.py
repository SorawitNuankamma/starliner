from flask import Flask, render_template, render_template_string, request, jsonify
import os
import json
from datetime import datetime

app = Flask(__name__, template_folder="templates", static_folder="static")

components_directory = "F:\\Learning\\starliner\\components"

class Components:
    navigation = open(f"{components_directory}\\navigation.html").read()

components = Components()

def sortPages(e):
    return e['order']

@app.route("/")
def home_page():
    return render_template("home.html")

@app.route("/components")
def components_page():
    return render_template("components.html")

@app.route("/course/<course_name>/<chapter_name>/<page_number>")
def chapter_page(course_name, chapter_name, page_number):
    pages = [
        {
            "label": page_name.split("_")[1][:-5], 
            "value": page_name,
            "order": int(page_name.split("_")[0]),
            "style": "nav-highlight" if int(page_number) == int(page_name.split("_")[0]) else ""
        }
        for page_name in os.listdir(
            f"F:\\Learning\\starliner\\templates\\{course_name}\\{chapter_name}"
        )
        if page_name.endswith(".html")
    ]
    pages.sort(key=sortPages)
    navigation_component = render_template_string(components.navigation, pages=pages, course_name=course_name, chapter_name=chapter_name)
    return render_template(f"{course_name}/{chapter_name}/{pages[int(page_number)-1]['value']}",
                           chapter_name=chapter_name,
                           chapter_label=chapter_name.split('_')[1],
                           course_name=course_name,
                           pages=pages,
                           pages_length=len(pages),
                           page=pages[int(page_number)-1],
                           navigation_component=navigation_component
                           )

@app.route("/course/<course_name>")
def course_page(course_name):
    chapters = [
        {
            "label": chapter_name.split("_")[1], 
            "value": chapter_name,
            "order": int(chapter_name.split("_")[0])
        }
        for chapter_name in os.listdir(
            "F:\\Learning\\starliner\\templates\\programming_101"
        )
        if not (chapter_name.endswith(".html") or  chapter_name.endswith(".json"))
    ]
    chapters.sort(key=sortPages)
    # show the user profile for that user
    return render_template(
        f"{course_name}/index.html", course_name=course_name, chapters=chapters
    )


@app.route("/submission", methods=["POST"])
def submission():
    data = request.get_json()
    required = [
        "course_name",
        "chapter_name",
        "page_name",
        "submission_type",
        "content",
        "is_passed",
    ]
    if not data or any(field not in data for field in required):
        return jsonify({"error": "Invalid request"}), 400

    submission_dir = os.path.join(os.path.dirname(__file__), "submission")
    os.makedirs(submission_dir, exist_ok=True)

    filename = (
        f"{data['course_name']}_{data['chapter_name']}_{data['page_name']}_"
        f"{datetime.now().strftime('%d_%m_%y')}.json"
    )

    with open(os.path.join(submission_dir, filename), "w", encoding="utf-8") as f:
        json.dump(data, f)

    return jsonify({"message": "Submission saved"})


@app.route("/execute", methods=["POST"])
def execute_code():
    data = request.get_json()
    if not data or "programming_language_name" not in data or "code_content" not in data:
        return jsonify({"error": "Invalid request"}), 400

    if data["programming_language_name"].lower() != "python":
        return jsonify({"error": "Only python is supported"}), 400

    code = data["code_content"]
    import io
    import contextlib

    buffer = io.StringIO()
    try:
        with contextlib.redirect_stdout(buffer):
            exec(code, {})
    except Exception as e:
        return jsonify({"output": buffer.getvalue(), "error": str(e)}), 400

    return jsonify({"output": buffer.getvalue()})
