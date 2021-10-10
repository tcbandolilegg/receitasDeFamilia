const express = require('express')

const app = express()
app.use(express.json())
// app.use(midware)
app.use("/", "index.html")
const port = 5000

app.listen(port, () => {
  console.log(`\nServidor subiu ${port}`)
})

const fs = require('fs').promises;

let dataCadernos = [];
let dataReceitas = [];
let dataUsers = [];
let dataCategorias = [];
let dataBlog = [];

livroReceitas();


async function livroReceitas() {
  await createArrays();

  console.log('\nFIM do carrecamento dos JSON');
}


async function createArrays() {

  await doDataUsers()
  await doDataCadernos()
  await doDataReceitas()
  await doDataCategorias()
  await doDataBlog()
}

async function doDataUsers() {
  console.log('criando.. dataUsers');
  console.log('Array de usuários utilizados pelo sistema');

  try {
    dataUsers = await JSON.parse(await fs.readFile("backend/src/modal/dataUsers.json"))
    console.log(dataUsers)
  } catch (err) {
    console.log('Erro no Carregamento de dataUsers.JSON', err);
  }
}

async function doDataCadernos() {
  console.log('criando.. dataCadernos');
  console.log('Array de cadernos utilizados pelo sistema');

  try {
    dataCadernos = await JSON.parse(await fs.readFile("backend/src/modal/dataCadernos.json"))
    console.log(dataCadernos)
  } catch (err) {
    console.log('Erro no Carregamento de dataCadernos.JSON', err);
  }
}

async function doDataReceitas() {
  console.log('criando.. dataReceitas');
  console.log('Array de receitas utilizados pelo sistema');

  try {
    dataReceitas = await JSON.parse(await fs.readFile("backend/src/modal/dataReceitas.json"))
    console.log(dataReceitas)
  } catch (err) {
    console.log('Erro no Carregamento de dataReceitas.JSON', err);
  }
}

async function doDataCategorias() {
  console.log('criando.. dataCategorias');
  console.log('Array de categorias utilizados pelo sistema');

  try {
    dataCategorias = await JSON.parse(await fs.readFile("backend/src/modal/dataCategorias.json"))
    console.log(dataCategorias)
  } catch (err) {
    console.log('Erro no Carregamento de dataCategorias.JSON', err);
  }
}

async function doDataBlog() {
  console.log('criando.. dataBlog');
  console.log('Array de Blog utilizados pelo sistema');

  try {
    dataBlog = await JSON.parse(await fs.readFile("backend/src/modal/dataBlog.json"))
    console.log(dataBlog)
  } catch (err) {
    console.log('Erro no Carregamento de dataBlog.JSON', err);
  }
}


  // dataCadernos.push(cadernoTemp)

  // fs.writeFile("backend/src/modal/dataCadernos.json",
  //   JSON.stringify(dataCadernos, null, 2)
  // );

