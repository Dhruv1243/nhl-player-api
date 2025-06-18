import express from "express";
import cors from "cors";
import teamsRoutes from "./routes/teams.js";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ["https://nhl-ui.onrender.com"];

app.use(
  cors({
    origin: "*", // 👈 Allow from any domain (good for testing, not production)
  })
);

app.use("/api/teams", teamsRoutes);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
