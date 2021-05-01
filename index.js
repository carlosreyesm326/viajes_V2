import express from "express";
import router from "./routers/index.js";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "../variables.env" });
console.log(process.env.HOST);

const port = process.env.PORT || 4000;
const host = process.env.HOST || "0.0.0.0";

const app = express();
db.authenticate()
  .then(() => {
    console.log("DB IS CONNECTED");
  })
  .catch(e => console.log(e));

app.set("view engine", "pug");
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombrePagina = "Agencia de viajes";
  return next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

app.listen(port, host, () => {
  console.log(
    `El Servidor se ejecuta en el puerto: ${port} y en el host: ${host}`
  );
});
