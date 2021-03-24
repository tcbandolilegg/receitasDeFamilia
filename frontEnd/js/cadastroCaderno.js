let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
let dataCadernos = JSON.parse(localStorage.getItem("dataCadernos"))
let idUserGlobal = localStorage.getItem('idUserGlobal');
console.log(dataUsers)
console.log(dataCadernos)

const nomeFamilia = document.querySelector("#nomeFamilia");
const origemFamilia = document.querySelector("#origemFamilia");
const convidaMembros = document.querySelector("#convidaMembros");

const botaoSalvarCaderno = document.querySelector("#botaoSalvarCaderno");


botaoSalvarCaderno.addEventListener('click', (event) => {
  const nomeFamiliaGlobal = nomeFamilia.value
  const origemFamiliaGlobal = origemFamilia.value
  const convidaMembrosGlobal = convidaMembros.value

  verificaCaderno(nomeFamiliaGlobal, origemFamiliaGlobal, convidaMembrosGlobal, idUserGlobal)

})

function verificaCaderno(nomeFamiliaGlobal, origemFamiliaGlobal, convidaMembrosGlobal, idUserGlobal) {
  const fimArquivo = dataCadernos.length
  let contador = 0

  dataCadernos.forEach(element => {

    if (element.descricao.toUpperCase() == nomeFamiliaGlobal.toUpperCase()) {
      alert('Este caderno já existe')
      window.location.href = "/frontEnd/pages/perfil.html"

    } else {
      contador = contador + 1
      if (contador === fimArquivo) {
        const novoId = ('_' + Date())
        console.log(novoId)
        localStorage.setItem("idCadernoGlobal", novoId);

        const cadernoTemp = {
          id: novoId,
          idUser: idUserGlobal,
          descricao: nomeFamiliaGlobal.toUpperCase(),
          origem: origemFamiliaGlobal.toUpperCase()
        }

        dataCadernos.push(cadernoTemp)
        localStorage.setItem("dataCadernos", JSON.stringify(dataCadernos))
        window.location.href = `mailto: ${convidaMembrosGlobal}?subject=Acabei de criar o carderno de Receitas, no sistema de Livros de família => ${nomeFamiliaGlobal.toUpperCase()} e quero te convidar`

        console.log(dataCadernos)
        window.location.href = "/frontEnd/pages/perfil.html"

      }
    }
  });

}



