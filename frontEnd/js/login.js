
let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))


const userLogin = document.querySelector("#userLogin");
const senhaLogin = document.querySelector("#senhaLogin");
const botaoLogin = document.querySelector("#botaoLogin");
const botaoEsqueciSenha = document.querySelector("#botaoEsqueciSenha");
const botaoNaoTenhoLogin = document.querySelector("#botaoNaoTenhoLogin");




botaoLogin.addEventListener('click', (event) => {
  const emailGlobal = userLogin.value
  const userLoginGlobal = userLogin.value
  const senhaGlobal = senhaLogin.value
  const idUserGlobal = 0
  verificaUser(emailGlobal, senhaGlobal, userLoginGlobal, idUserGlobal)
})


function verificaUser(emailGlobal, senhaGlobal, userLoginGlobal, idUserGlobal) {

  const fimArquivo = dataUsers.length

  let contador = 0

  dataUsers.forEach(element => {


    if (((element.email.toUpperCase()) == (emailGlobal.toUpperCase()) && (element.senha.toUpperCase()) == (senhaGlobal.toUpperCase())) || ((element.userLogin.toUpperCase()) == (userLoginGlobal.toUpperCase()) && (element.senha.toUpperCase()) == (senhaGlobal.toUpperCase()))) {

      idUserGlobal = element.id
      localStorage.setItem("idUserGlobal", idUserGlobal);
      window.location.href = "/frontEnd/pages/perfil.html"
    } else {
      contador = contador + 1
      if (contador == fimArquivo) {
        alert('Usuário senha inválidos')
      }
    }
  });
  return idUserGlobal
}

// module.exports = verificaUser()






