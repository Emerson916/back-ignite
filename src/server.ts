import express from "express";
import { routes } from "./routes";

const app = express();

const PORT = parseInt(process.env.PORT ?? process.env.port ?? "3000");

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
