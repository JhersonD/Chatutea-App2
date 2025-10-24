import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", protectRoute, async (req, res) => {
  try {
    // protectRoute ya verifica el JWT y coloca el usuario en req.user
    res.status(200).json(req.user);
  } catch (error) {
    console.error("Error al obtener perfil:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
