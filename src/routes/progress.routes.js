import { Router } from "express";
import ProgressController from "../controllers/progress.controller.js";

const router = Router();

router.post("/save", ProgressController.saveProgress);
router.get("/:uid", ProgressController.getProgress);

export default router;
