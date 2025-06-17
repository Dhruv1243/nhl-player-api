import express from "express";
import { getTeams } from "../controllers/nhlController.js";

const router = express.Router();

router.get("/", getTeams);

export default router;
