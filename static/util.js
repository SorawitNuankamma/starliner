let isChapterNavOpen = false;
let value = localStorage.getItem("isNavOpen");
if (value == "true") {
  isChapterNavOpen = true;
}
let chapterNavElement = document.getElementById("page-nav");
let chapterNavContent = document.querySelector(".chapter-navigation")

function openChapterNav() {
  isChapterNavOpen = !isChapterNavOpen;
  renderChapterNav();
}

function renderChapterNav() {
  if(!chapterNavElement) return
  if (isChapterNavOpen) {
    chapterNavElement.classList.remove("page-nav-hidden");
    chapterNavElement.classList.add("page-nav-show");
    chapterNavContent.classList.remove("hidden")
    localStorage.setItem("isNavOpen", "true");
  } else {
    chapterNavElement.classList.add("page-nav-hidden");
    chapterNavElement.classList.remove("page-nav-show");
    chapterNavContent.classList.add("hidden")
    localStorage.setItem("isNavOpen", "false");
  }
}
renderChapterNav();
