import express from "express";
import {
  adicionarFavorito,
  removerFavorito,
  listarFavoritos
} from "../controllers/favoritosController.js";

const router = express.Router();

router.get("/", listarFavoritos);
router.post("/", adicionarFavorito);
router.put;
router.delete("/:id", removerFavorito);

export default router;
