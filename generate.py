f = open("lecture\\Programming 101\\1_Introduction.md", encoding="utf-8")
file_line = f.read().split("\n")
page = [i for i in file_line if i.split(" ")[0] == "######"]
print(page)
