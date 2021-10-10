const express = require('express')

const app = express()
app.use(express.json())
const fs = require('fs').promises;

window.addEventListener('load', function () {

  fs.writeFile("backend/src/modal/dataCadernos.json")

  const btAceitarTermos = document.querySelector("#btAceitarTermos");
  const divAceitarTermos = document.querySelector("#termos");



  btAceitarTermos.addEventListener('click', (event) => {
    divAceitarTermos.style.display = 'none'
  })

  doEmAlta()

});

function doEmAlta() {
  const dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
  const emAlta = document.querySelector('#divEmAlta')


  const dataReceitasSort = dataReceitas.sort(visualizacoes)
  /// fazer o sorte e separar as 4 primeiras
  const espaco = document.createElement('br')

  for (i = 0; i < 5; i++) {

    const receitaEmAlta = document.createElement('div')
    receitaEmAlta.classList.add('receitasEmAlta')
    const fotoReceitaEmAlta = document.createElement('img')
    fotoReceitaEmAlta.classList.add('fotoReceitaEmAlta')
    fotoReceitaEmAlta.src = dataReceitasSort[i].foto
    const nomeReceitaEmAlta = document.createElement('p')
    nomeReceitaEmAlta.classList.add('nomeReceitaEmAlta')
    nomeReceitaEmAlta.innerHTML = dataReceitasSort[i].nome_receita
    const quemCriouReceitaEmAlta = document.createElement('p')
    quemCriouReceitaEmAlta.classList.add('quemCriouReceitaEmAlta')
    quemCriouReceitaEmAlta.innerHTML = dataReceitasSort[i].quem_criou_receita

    receitaEmAlta.appendChild(fotoReceitaEmAlta)
    receitaEmAlta.appendChild(espaco)
    receitaEmAlta.appendChild(espaco)
    receitaEmAlta.appendChild(quemCriouReceitaEmAlta)
    receitaEmAlta.appendChild(nomeReceitaEmAlta)
    emAlta.appendChild(receitaEmAlta)

  }

  function visualizacoes(a, b) {
    return a.numero_de_visualizacoes - b.numero_de_visualizacoes;
  }

}
