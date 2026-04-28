import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();

router.post("/register", UserController.createUser);
router.post("/login", UserController.login);
router.get("/:uid", UserController.getUser);

export default router;
