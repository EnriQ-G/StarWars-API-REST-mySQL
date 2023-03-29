import express from "express";
import morgan from "morgan";
import helmet from "helmet";

//Routes, sirve para importar las rutas de la API
import starwarsRoutes from "./routes/starwars.routes";

const app = express();

// settings, sirve para configurar el servidor
app.set("port", 4000);

// Middlewares, sirve para procesar datos antes de que lleguen a las rutas
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet()); //sirve para proteger la API

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes Middleware
app.use("/api/starwars", starwarsRoutes);

export default app;