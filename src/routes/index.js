const { Router } = require("express");
const router = Router();

router.get("/rutaGet1", (req, res) => {
  console.log("Hola en la consola de node, desde una llamada en el servidor");
  res.send("hola desde una web llamada en el servidor");
});

router.get("/rutaGet2", (req, res) => {
  console.log("Hola en la consola de node, desde una llamada en el servidor");
  res.send("hola desde el bar");
});

router.get("/rutaGet3", (req, res) => {
  console.log("Hola en la consola de node, desde una llamada en el servidor");
  res.send("hola desde el trabajo");
});

router.get("/rutaGet4", (req, res) => {
  console.log("Hola en la consola de node, desde una llamada en el servidor");
  res.send("hola desde el coche");
});

router.get("/rutaGet5", (req, res) => {
  console.log("Hola en la consola de node, desde una llamada en el servidor");
  res.send("hola desde mi casa");
});
module.exports = router;
