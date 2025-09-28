import express from "express";
import * as TarefasController from "../controllers/tarefasController.js";

const router = express.Router();

router.get("/tarefas", TarefasController.listarTarefas);
router.get("/tarefas/:id", TarefasController.buscarTarefa);
router.post("/tarefas", TarefasController.criarTarefa);
router.put("/tarefas/:id", TarefasController.atualizarTarefa);
router.delete("/tarefas/:id", TarefasController.deletarTarefa);

export default router;
