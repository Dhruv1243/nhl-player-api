import express from "express";
import {
  getTeams,
  getPlayers,
  getStats,
} from "../controllers/nhlController.js";

const router = express.Router();

router.get("/", getTeams);
router.get("/:abbrev/players", getPlayers);
// this route will handle requests to get players for a specific team by its abbreviation
// e.g., /teams/NYR/players will get players for the New York Rangers
// :abbrev is a route parameter that will be replaced with the actual team abbreviation
//will be available to the handler as req.params.abbrev
//when this url is hit express will call the getPlayers function from the nhlController.js file
router.get("/players/:playerId", getStats);
// this route will handle requests to get stats for a specific player by their ID

export default router;
