const express = require("express");
const app = express();
const PORT = 8080;
const { dbConnection } = require("./config/config")

dbConnection();

app.use(express.json());

app.use("/users", require("./routes/users"));
// app.use("/posts", require("./routes/posts")); 


app.use((req, res, next) => {
  res.status(404).send({ message: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Error interno del servidor", error: err.message });
});

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
