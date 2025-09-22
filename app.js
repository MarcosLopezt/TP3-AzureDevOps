const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Azure DevOps demo",
    ts: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// --- LOGIN UI + ENDPOINTS ---
app.get("/login", (req, res) => {
  // sirve la página estática
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res
      .status(400)
      .json({ ok: false, error: "email y password son obligatorios" });
  }
  // Simulación: cualquier credencial pasa
  res.json({ ok: true, user: { email }, message: "Login exitoso (demo)" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
