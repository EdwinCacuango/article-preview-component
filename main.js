let authorSection = document.getElementById("author-section");
let shareBtn = document.getElementById("share-btn");

console.log(authorSection);
console.log(shareBtn);

shareBtn.addEventListener("click", () => {
  authorSection.classList.toggle("active") 
});
