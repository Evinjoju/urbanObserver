// scripts/generate-search-index.js
const fs = require("fs");
const path = require("path");

const articlesDir = path.join(__dirname, "../public/data/articles");
const outputFile = path.join(__dirname, "../public/data/all-articles-index.json");

if (!fs.existsSync(articlesDir)) {
  console.error("Articles folder not found:", articlesDir);
  process.exit(1);
}

const articles = [];

fs.readdirSync(articlesDir).forEach((file) => {
  if (file.endsWith(".json")) {
    const filePath = path.join(articlesDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    
    articles.push({
      slug: file.replace(".json", ""),
      title: data.title,
      shortdescription: data.shortdescription || "",
      description: data.description || "",
      category: data.category || "",
      author: data.author || "",
      date: data.date || "",
    });
  }
});

fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
console.log("Search index created with", articles.length, "articles!");
console.log("Saved to:", outputFile);