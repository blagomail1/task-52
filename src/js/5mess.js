document.body.addEventListener("click", function() {
  for (let i = 0; i < 5; i++) {

    const article = document.createElement("article");
    article.classList.add("message");

    article.textContent = "BOOM";

    document.body.appendChild(article);
  }
});
