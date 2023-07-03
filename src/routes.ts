import { Router } from "express";
import { weatherController } from "./controllers/WeatherController";

const router: Router = Router();

//Routes
router.get("/api/weather", weatherController.weather);

export { router };