let idUserGlobal = localStorage.getItem('idUserGlobal');
let dataUsers = JSON.parse(localStorage.getItem('dataUsers'))
let dataCadernos = JSON.parse(localStorage.getItem('dataCadernos'))
let dataCategorias = JSON.parse(localStorage.getItem('dataCategorias'))
let dataReceitas = JSON.parse(localStorage.getItem('dataReceitas'))


function localizaUser(userTeste) {

  if (userTeste.id == idUserGlobal) {

    return userTeste
  }
}

const userPerfil = dataUsers.filter(localizaUser)
console.log(userPerfil)


const dadosUser = document.querySelector('#dadosUserPerfil')
dadosUser.style.dysplay = 'flex'
dadosUser.style.flexDirection = 'column'
dadosUser.style.justifyContent = 'center'




const divUserDados = document.createElement('div');
divUserDados.classList.add('divUserDados')
divUserDados.style.display = 'flex'
divUserDados.style.flexWrap = 'wrap'
divUserDados.style.marginBottom = '20px'
divUserDados.style.justifyContent = 'center'




const divUserFoto = document.createElement('div');
divUserFoto.classList.add('divFotoUser')

const divUserDescricao = document.createElement('div')
divUserDescricao.classList.add('userDescrecao')
divUserDescricao.style.marginLeft = '50px'
divUserDescricao.style.display = 'flex'
divUserDescricao.style.flexDirection = 'column'
divUserDescricao.style.alignItems = 'center'
divUserDescricao.style.justifyItems = 'center'
divUserDescricao.style.justifyContent = 'center'
divUserDescricao.style.alignSelf = 'center'


const fotoUser = document.createElement('img')

fotoUser.src = userPerfil[0].foto
fotoUser.style.height = '100px'
fotoUser.style.borderRadius = '50%'
fotoUser.classList.add('imagePerfil')


const nameUser = document.createElement('h2')
nameUser.innerHTML = userPerfil[0].nome
nameUser.classList.add('nameUser')


const email = document.createElement('p')
email.innerHTML = userPerfil[0].email
email.classList.add('emailUser')

const divBotaoPerfil = document.createElement('div')
divBotaoPerfil.classList.add('divBotaoPerfil')
divBotaoPerfil.style.display = 'flex'
divBotaoPerfil.style.justifyContent = 'center'
divBotaoPerfil.style.marginTop = "20px"


const divBotaoCaderno = document.createElement('div')
divBotaoCaderno.classList.add('divBotaoCaderno')
divBotaoCaderno.style.display = 'flex'
divBotaoCaderno.style.justifyContent = 'center'
divBotaoCaderno.style.marginTop = "20px"

const divBotaoReceita = document.createElement('div')
divBotaoReceita.classList.add('divBotaoReceita')
divBotaoReceita.style.display = 'flex'
divBotaoReceita.style.justifyContent = 'center'
divBotaoReceita.style.marginTop = "20px"


const botaoEditarPerfil = document.createElement('button')
botaoEditarPerfil.innerHTML = 'Editar Perfil'
botaoEditarPerfil.classList.add('botaoLaranja')


const divCadernos = document.createElement('div')
divCadernos.classList.add('divCadernos')
divCadernos.style.justifyContent = 'space-around'

const tituloCaderno = document.createElement('h2')
tituloCaderno.style.fontSize = 'x-large'
tituloCaderno.style.fontWeight = 'bold'
tituloCaderno.style.textAlign = 'center'
tituloCaderno.style.marginBottom = '10px'
tituloCaderno.innerHTML = 'Meus Cadernos'

let contadorCadernos = 0
const fimArquivoCadernos = dataCadernos.length

dataCadernos.forEach(element => {
  if (element.idUser == idUserGlobal) {
    const entradaCaderno = document.createElement('p')
    entradaCaderno.classList.add('cadernos')
    entradaCaderno.style.marginBottom = '5px'
    entradaCaderno.style.display = 'flex'
    entradaCaderno.style.justifyContent = 'center'
    entradaCaderno.innerHTML = element.descricao + ' de origem ' + element.origem
    divCadernos.appendChild(entradaCaderno)
  } else {
    contadorCadernos = contadorCadernos + 1
    if (contadorCadernos == fimArquivoCadernos) {
      const entradaCaderno = document.createElement('p')
      entradaCaderno.classList.add('cadernos')
      entradaCaderno.style.display = 'flex'
      entradaCaderno.style.justifyContent = 'center'
      entradaCaderno.style.marginBottom = '10px'
      entradaCaderno.innerHTML = 'Não Possui cadernos cadastrados'
      divCadernos.appendChild(entradaCaderno)
    }
  }

});

const botaoCriarCaderno = document.createElement('button')
botaoCriarCaderno.innerHTML = 'Criar Caderno'
botaoCriarCaderno.classList.add('botaoLaranja')



const divReceitas = document.createElement('div')
divReceitas.classList.add('divRceitas')
divReceitas.style.justifyContent = 'space-around'

const tituloReceita = document.createElement('h2')
tituloReceita.style.fontSize = 'x-large'
tituloReceita.style.fontWeight = 'bold'
tituloReceita.style.textAlign = 'center'
tituloReceita.style.marginBottom = '10px'

tituloReceita.innerHTML = 'Minhas Receitas'

const fimArquivoReceitas = dataReceitas.length
let contadorReceitas = 0
dataReceitas.forEach(element => {



  if (element.idUser == idUserGlobal) {
    const entradaReceita = document.createElement('p')
    entradaReceita.classList.add('receitas')
    entradaReceita.style.marginBottom = '5px'
    entradaReceita.style.display = 'flex'
    entradaReceita.style.justifyContent = 'center'
    entradaReceita.innerHTML = element.nome_receita + ' da ' + element.quem_criou_receita
    divReceitas.appendChild(entradaReceita)

  } else {
    contadorReceitas = contadorReceitas + 1
    if (contadorReceitas == fimArquivoReceitas) {
      const entradaReceita = document.createElement('p')
      entradaReceita.classList.add('receitas')
      entradaReceita.style.marginBottom = '10px'
      entradaReceita.style.display = 'flex'
      entradaReceita.style.justifyContent = 'center'
      entradaReceita.innerHTML = 'Não possui receitas cadastradas'
      divReceitas.appendChild(entradaReceita)
    }
  }

});


const botaoCriarReceitas = document.createElement('button')
botaoCriarReceitas.innerHTML = 'Criar Receitas'
botaoCriarReceitas.classList.add('botaoLaranja')


divUserFoto.appendChild(fotoUser)

divUserDescricao.appendChild(nameUser)
divUserDescricao.appendChild(email)


divUserDados.appendChild(divUserFoto)
divUserDados.appendChild(divUserDescricao)

dadosUser.appendChild(divUserDados)


divBotaoPerfil.appendChild(botaoEditarPerfil)
dadosUser.appendChild(divBotaoPerfil)



dadosUser.appendChild(tituloCaderno)

dadosUser.appendChild(divCadernos)

divBotaoCaderno.appendChild(botaoCriarCaderno)
dadosUser.appendChild(divBotaoCaderno)

dadosUser.appendChild(tituloReceita)

dadosUser.appendChild(divReceitas)

divBotaoReceita.appendChild(botaoCriarReceitas)
dadosUser.appendChild(divBotaoReceita)





botaoEditarPerfil.addEventListener('click', (event) => {
  botaoEditarPerfil.style.display = 'none'
})

botaoCriarCaderno.addEventListener('click', (event) => {
  window.location.href = "/frontEnd/pages/cadastroCaderno.html"

})

botaoCriarReceitas.addEventListener('click', (event) => {
  window.location.href = "/frontEnd/pages/cadastroReceita.html"
})




botaoCriarReceitas










