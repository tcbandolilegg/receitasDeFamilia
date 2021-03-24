const express = require('express')

const app = express()
app.use(express.json())
// app.use(midware)

const port = 5000


app.listen(port, () => {
  console.log(`Servidor subiu ${port}`)
})

const fs = require('fs').promises;

let globalUsers = [];

receitas();

async function receitas() {
  await createArrays();
  console.log('fim');
}


let dataReceitas = [];
let dataCadastro = [];
let dataUsers = [];
let dataCategoria = [];
let dataBlog = [];

async function livroReceitas() {
  createArrays();
  console.log('fim');
}

livroReceitas();

async function createArrays() {
  console.log('criando.. arrays');
  console.log('\nCriar as arrays que serão utilizados pelo sistema');
  doDataUsers()
  doDataCadernos()
  doDataReceitas()
  doDataCategorias()
  doDataBlog()
}


async function doDataUsers() {
  console.log('criando.. Users');
  try {
    dataUserGlobal = await JSON.parse(await fs.readFile("backend/src/modal/dataUsers.json"))
    localStorage.setItem("dataUsers", JSON.stringify(dataUserGlobal));
    console.log(globalUsers)
  } catch (err) {
    console.log(err);
  }
}




function doDataCadernos() {
  console.log('criando.. Cadernos');

  try {
    dataCadernosJson = JSON.parse(
      fs.readFile('/backend/src/modal/dataCadernos.json')
    );
    localStorage.setItem("dataCadernos", JSON.stringify(dataCadernosJson));
  } catch (err) {
    console.log('DataCadernos', err);
  }
}


function doDataReceitas() {
  console.log('criando.. Receitas');

  try {
    dataReceitasJson = JSON.parse(
      fs.readFile('/backend/src/modal/dataReceitas.json')
    );
    localStorage.setItem("dataReceitas", JSON.stringify(dataReceitasJson));
  } catch (err) {
    console.log('DataReceitas', err);
  }
}

function doDataCategorias() {
  console.log('criando.. Categorias');

  try {
    dataCategoriasJson = JSON.parse(
      fs.readFile('/backend/src/modal/dataCategorias.json')
    );
    localStorage.setItem("dataUsers", JSON.stringify(dataCategoriasJson));
  } catch (err) {
    console.log('DataCategoria', err);
  }
}

function doDataBlog() {
  console.log('criando.. Blog');

  try {
    dataBlogJson = JSON.parse(
      fs.readFile('/backend/src/modal/dataBlog.json')
    );
    localStorage.setItem("dataUsers", JSON.stringify(dataBlogJson));

  } catch (err) {
    console.log('DataBlog', err);
  }
}

