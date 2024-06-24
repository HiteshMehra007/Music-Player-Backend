import Router from "express";
import { singupController } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", singupController);

// router.post("/login", loginController);

export default router;