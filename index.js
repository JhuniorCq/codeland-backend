import express from "express";
import morgan from "morgan";
import cors from "cors";
import { SERVER_PORT } from "./src/config/config.js";
import userRouter from "./src/routes/user.routes.js";
import handleError from "./src/middlewares/handleError.js";
import handleError404 from "./src/middlewares/handleError404.js";

const app = express();

app.disable("x-powered-by");

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());
app.use(morgan("dev"));

// Rutas del usuario
app.use("/user", userRouter);

// Middleware para manejar rutas no encontradas
app.use(handleError404);

// Middleware para manejar errores
app.use(handleError);

app.listen(SERVER_PORT, () =>
  console.log(`Servidor ejecutándose en el puerto ${SERVER_PORT}`),
);
