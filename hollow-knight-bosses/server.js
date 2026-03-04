const express = require("express");
const path = require("path");
const fs = require("fs");
const bosses = require("./data/bosses");

const app = express();
const PORT = 3000;

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// ── Helper: read an HTML template and inject values ──────────────────────────
function renderTemplate(templateName, replacements) {
  const filePath = path.join(__dirname, "views", templateName);
  let html = fs.readFileSync(filePath, "utf-8");
  for (const [key, value] of Object.entries(replacements)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }
  return html;
}

// ── HOME route ────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  const cards = bosses
    .map(
      (b) => `
    <a href="/bosses/${b.id}" class="boss-card">
      <img src="${b.image}" alt="${b.name}" onerror="this.src='https://via.placeholder.com/80x80?text=Boss'"/>
      <div class="card-info">
        <h3>${b.name}</h3>
        <p class="location">📍 ${b.location}</p>
        <p class="difficulty difficulty-${b.difficulty.toLowerCase()}">${b.difficulty}</p>
        <p class="desc">${b.description}</p>
      </div>
    </a>`
    )
    .join("\n");

  const html = renderTemplate("index.html", { BOSS_CARDS: cards });
  res.send(html);
});

// ── DETAIL route ──────────────────────────────────────────────────────────────
app.get("/bosses/:id", (req, res) => {
  const boss = bosses.find((b) => b.id === req.params.id);
  if (!boss) {
    return res.status(404).send(fs.readFileSync(path.join(__dirname, "views", "404.html"), "utf-8"));
  }

  const html = renderTemplate("detail.html", {
    NAME: boss.name,
    LOCATION: boss.location,
    DIFFICULTY: boss.difficulty,
    DIFFICULTY_LOWER: boss.difficulty.toLowerCase(),
    REWARD: boss.reward,
    DESCRIPTION: boss.description,
    LORE: boss.lore,
    TIPS: boss.tips,
    IMAGE: boss.image,
    ID: boss.id,
  });

  res.send(html);
});

// ── 404 catch-all ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).send(fs.readFileSync(path.join(__dirname, "views", "404.html"), "utf-8"));
});

app.listen(PORT, () => {
  console.log(`🦋 Hollow Knight Boss Guide running at http://localhost:${PORT}`);
});