// backend/server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/teams", async (req, res) => {
  try {
    const response = await fetch("https://statsapi.web.nhl.com/api/v1/teams");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch NHL data" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`)
);
