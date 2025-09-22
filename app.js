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

// --- RECOVER PASSWORD UI + ENDPOINTS ---
app.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "recover.html"));
});

app.post("/forgot-password", (req, res) => {
  const { email } = req.body || {};
  if (!email)
    return res.status(400).json({ ok: false, error: "email es obligatorio" });

  const ttl = parseInt(process.env.RECOVERY_TOKEN_TTL_MINUTES || "15", 10);
  // token demo (no sensible)
  const token = Math.random().toString(36).slice(2, 10);

  console.log(`[RECOVER DEMO] email=${email} token=${token} ttl=${ttl}min`);
  res.json({ ok: true, email, token, expiresInMinutes: ttl });
});
