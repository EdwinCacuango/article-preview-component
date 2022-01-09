let authorSection = document.getElementById("author-section");
let shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", () => {
  authorSection.classList.toggle("active") 
});
