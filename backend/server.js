import express from "express";
import cors from "cors";
import teamsRoutes from "./routes/teams.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/api/teams", teamsRoutes);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
