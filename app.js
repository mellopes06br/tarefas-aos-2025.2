import express from "express";
import tarefasRoutes from "./routes/tarefasRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", tarefasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
