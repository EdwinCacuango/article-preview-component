let authorSection = document.getElementById("author-section");
let shareBtn = document.getElementById("share-btn");

console.log(authorSection);
console.log(shareBtn);

shareBtn.addEventListener("click", () => {
  if (authorSection.classList.contains("active")) {
    authorSection.classList.remove("active");
    authorSection.style.background="none"
  } else {
    authorSection.style.backgroundColor = "hsl(217, 19%, 35%)";
    authorSection.classList.add("active");
  }
});
