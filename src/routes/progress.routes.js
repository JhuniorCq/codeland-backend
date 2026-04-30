import { Router } from "express";
import ProgressController from "../controllers/progress.controller.js";

const router = Router();

router.post("/save", ProgressController.saveProgress);

export default router;
