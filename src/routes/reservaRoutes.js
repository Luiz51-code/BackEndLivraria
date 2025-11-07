import express from "express";
import { listarReservas, criarReserva, atualizarReserva, deletarReserva }
from "../controllers/reservaController.js";

const router = express.Router();

router.get("/", listarReservas);
router.post("/", criarReserva);
router.put("/:id", atualizarReserva);
router.delete("/:id", deletarReserva);

export default router;
