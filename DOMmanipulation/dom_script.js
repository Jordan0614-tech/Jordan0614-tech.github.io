// ── Toggle Forms ─────────────────────────────────────────────────────────────

function showFilter() {
  const filterForm = document.getElementById("filterContent");
  const newForm    = document.getElementById("newContent");

  // Toggle filter form; hide the add-new form
  if (filterForm.style.display === "block") {
    filterForm.style.display = "none";
  } else {
    filterForm.style.display = "block";
    newForm.style.display    = "none";
  }
}

function showAddNew() {
  const newForm    = document.getElementById("newContent");
  const filterForm = document.getElementById("filterContent");

  // Toggle add-new form; hide the filter form
  if (newForm.style.display === "flex") {
    newForm.style.display = "none";
  } else {
    newForm.style.display    = "flex";
    filterForm.style.display = "none";
  }
}

// ── Filter Articles ───────────────────────────────────────────────────────────

function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe  = document.getElementById("recipeCheckbox").checked;
  const showUpdate  = document.getElementById("updateCheckbox").checked;

  const articles = document.querySelectorAll("#articleList article");

  articles.forEach(function(article) {
    if (article.classList.contains("opinion")) {
      article.style.display = showOpinion ? "" : "none";
    } else if (article.classList.contains("recipe")) {
      article.style.display = showRecipe ? "" : "none";
    } else if (article.classList.contains("update")) {
      article.style.display = showUpdate ? "" : "none";
    }
  });
}

// ── Add New Article ───────────────────────────────────────────────────────────

function addNewArticle() {
  const title   = document.getElementById("inputHeader").value.trim();
  const bodyText = document.getElementById("inputArticle").value.trim();

  // Determine which radio button is selected
  let articleType = "";
  let markerLabel = "";
  if (document.getElementById("opinionRadio").checked) {
    articleType = "opinion";
    markerLabel = "Opinion";
  } else if (document.getElementById("recipeRadio").checked) {
    articleType = "recipe";
    markerLabel = "Recipe";
  } else if (document.getElementById("lifeRadio").checked) {
    articleType = "update";
    markerLabel = "Update";
  }

  // Require all fields to be filled
  if (!title || !bodyText || !articleType) {
    alert("Please fill in the title, select a type, and enter article text.");
    return;
  }

  // Build the new article element
  const newArticle = document.createElement("article");
  newArticle.classList.add(articleType);

  newArticle.innerHTML =
    '<span class="marker">' + markerLabel + '</span>' +
    '<h2>' + title + '</h2>' +
    '<p>' + bodyText + '</p>' +
    '<p><a href="moreDetails.html">Read more...</a></p>';

  // Append to the article list
  document.getElementById("articleList").appendChild(newArticle);

  // Clear the form and hide it
  document.getElementById("inputHeader").value  = "";
  document.getElementById("inputArticle").value = "";
  document.getElementById("opinionRadio").checked = false;
  document.getElementById("recipeRadio").checked  = false;
  document.getElementById("lifeRadio").checked    = false;
  document.getElementById("newContent").style.display = "none";
}
