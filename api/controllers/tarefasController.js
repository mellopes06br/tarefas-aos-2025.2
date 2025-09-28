import * as TarefaModel from "../models/tarefaModel.js";

export function listarTarefas(req, res) {
  res.json(TarefaModel.getAllTarefas());
}

export function buscarTarefa(req, res) {
  const tarefa = TarefaModel.getTarefaById(req.params.id);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  res.json(tarefa);
}

export function criarTarefa(req, res) {
  const novaTarefa = TarefaModel.createTarefa(req.body);
  res.status(201).json(novaTarefa);
}

export function atualizarTarefa(req, res) {
  const tarefaAtualizada = TarefaModel.updateTarefa(req.params.id, req.body);
  if (!tarefaAtualizada) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  res.json(tarefaAtualizada);
}

export function deletarTarefa(req, res) {
  const tarefaDeletada = TarefaModel.deleteTarefa(req.params.id);
  if (!tarefaDeletada) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  res.status(204).end();
}
