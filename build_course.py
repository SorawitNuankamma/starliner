import sys, os
import mistune

def build_page(file_path):
    paragraph_groups = []
    file_lines = open(file_path, encoding="utf-8").read().split("\n")
    prev_line = ""
    for line in file_lines:
        if prev_line.strip() == "" and line.strip() != "":
            paragraph_groups.append([])
        if line.strip() != "":
            paragraph_groups[-1].append(line)
        prev_line = line
    page = ""
    for group in paragraph_groups:
        page += build_component(group)
    return """{% extends 'base_page.html' %}{% block content %}""" + page + """{% endblock %}"""

def join_list(input_list, join_char) -> str:
    output = f'{input_list[0]} '
    for item in input_list[1:]:
        output += f'{join_char}{item}'
    return output

def build_component(paragraph_lines : list):

    component = ""
    def build_custom_element(lines):
        component_name = lines[0][1:]
        attrs = [i.strip() for i in join_list(lines[1:], '').split("-")]
        return f'<{component_name} {join_list(attrs," ")}></{component_name}>'

    def build_paragraph(lines):
        text = ""
        for line in lines:
            text += f"{line.strip()}<br>"
        return text

    line_first_char = paragraph_lines[0][0]
    if line_first_char == "/":
        component = build_custom_element(paragraph_lines)
    elif line_first_char == "|" or line_first_char == "#" or line_first_char == "`":
        component = mistune.html(join_list(paragraph_lines, "\n"))
    else:
        component = build_paragraph(paragraph_lines)

    return f"""<div class="container text-md">
                    {component}
            </div>
            """

# total arguments
if len(sys.argv) != 2:
    raise Exception("Invald target")

target_course = sys.argv[1]
target_path = os.path.join('lecture', target_course)

chapters = [
    {
        "name": chapter,
        "pages": [
            {
                "name": page,
                "content": build_page(os.path.join('lecture', target_course, chapter, page))
            }
            for page in os.listdir(os.path.join('lecture', target_course, chapter))
            if page.split(".")[1] == "md"
        ]
    }
    for chapter in os.listdir(target_path)
    if len(chapter.split(".")) == 1
]

output_directory = os.path.join('templates', target_course)

for chapter in chapters:
    os.makedirs(os.path.join(output_directory, chapter["name"]), exist_ok=True)

for chapter in chapters:
    for page in chapter["pages"]:
        output_path = os.path.join(
            output_directory,
            chapter["name"],
            f"{page['name'].split('.')[0]}.html"
        )
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(page["content"])
