const express = require("express");
const app = express()
const port = 8080


app.listen(port, () => {
  console.log(`servidor subiu na porta ${port}`)
})

const index = require("./src/usersRouters.js/indexRouter")
const pessoas = require("./src/usersRouters.js/pessoasRouters")

app.use("/", index)
app.use("/user", pessoas)