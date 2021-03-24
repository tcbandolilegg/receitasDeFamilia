
let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))


const botaoEsqueciSenha = document.querySelector("#botaoEsqueciSenha");
const emailEsqueciSenha = document.querySelector("#emailEsqueciSenha");

botaoEsqueciSenha.addEventListener('click', (event) => {
  const emailEsqueciSenhaGlobal = emailEsqueciSenha.value
  verificaUser(emailEsqueciSenhaGlobal)
})

function verificaUser(emailEsqueciSenhaGlobal) {

  const fimArquivo = dataUsers.length
  let contador = 0

  dataUsers.forEach(element => {
    if (element.email == emailEsqueciSenhaGlobal) {

      window.location.href = `mailto: ${element.email}?subject=${element.senha}`
    } else {
      contador = contador + 1
      if (contador == fimArquivo) {
        alert('Usuário não Encontrado')
      }
    }
  })
}
