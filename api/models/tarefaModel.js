let tarefas = [];
let currentId = 1;

function getAllTarefas() {
  return tarefas;
}

function getTarefaById(id) {
  return tarefas.find((t) => t.id === Number(id));
}

function createTarefa(data) {
  const novaTarefa = {
    id: currentId++,
    descricao: data.descricao,
    concluida: data.concluida ?? false,
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

function updateTarefa(id, data) {
  const tarefa = getTarefaById(id);
  if (!tarefa) return null;

  if (data.descricao != undefined) tarefa.descricao = data.descricao;
  if (data.concluida != undefined) tarefa.concluida = data.concluida;

  return tarefa;
}

function deleteTarefa(id) {
  const index = tarefas.findIndex((t) => t.id === Number(id));
  if (index === -1) return false;
  tarefas.splice(index, 1);
  return true;
}

export {
  getAllTarefas,
  getTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
