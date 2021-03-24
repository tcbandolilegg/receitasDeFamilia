const express = require("express");
const router = express.Router()


router.get("/", (_, res) => {

  res.send("Hello word")
})




// Todos os Usuários
app.get('/', (req, res) => {
  res.send('Executado a rota GET /')
})

// Todos os Usuários
app.get('/usuarios', (req, res) => {
  res.send(usuario)
})

// Todos os Usuários
app.get('/usuarios/:id', (req, res) => {
  function localizaUser(userTeste) {
    if (req.params.id == userTeste.id) {
      return userTeste
    }
  }
  const userLocalizado = usuario.filter(localizaUser)
  if (userLocalizado != "") {
    res.send(userLocalizado)
  } else {
    res.status(404)
    res.send(`Registro de id${req.params.id} não localizado`)
  }
})

// Inclusão de Usuários
app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body
  const novoId = usuario.length + 1
  // usuario.(unshift{id: novoId...novoUsuario}) ?????????
  const UserTemp = { id: novoId, ...novoUsuario }
  usuario.push(UserTemp)
  res.status(204)
  res.send(novoUsuario)

})

app.delete('/usuarios/:id', (req, res) => {
  let posicao = 0
  if (req.params.id == userTeste.id) {
    posicao = usuario.indexOf(userTeste.id);
    usuario.splice(posicao, 1);
    console.log('localizado no if params', posicao)
    // localStorage.setItem('posicaoTemp', posicao) Só funciona para navegador
    return userTeste
  } else {

    console.log('localizado no else params', posicao)
  }

})

module.exports = router 
