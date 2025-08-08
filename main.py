from flask import Flask, render_template, render_template_string
import os

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
    return render_template(f'{course_name}/{chapter_name}/{pages[int(page_number)-1]['value']}',
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
