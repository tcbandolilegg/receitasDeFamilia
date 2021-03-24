import {
  promises as fs,
  writeFile
} from 'fs';

let globalUsers = [];

receitas();

async function receitas() {
  await createArrays();
  console.log('fim');
}


async function createArrays() {
  console.log('criando.. arrays');
  console.log('\nCriar as arrays que serão utilizados pelo sistema');

  try {
    globalUsers = await JSON.parse(
      await fs.readFile('../../backend/src/modal/dataUsers.json')
    )
    console.log(globalUsers)
  } catch (err) {
    console.log(err);
  }
}

const userLogin = document.querySelector("#userLogin");
const senhaLogin = document.querySelector("#senhaLogin");
const botaoLogin = document.querySelector("#botaoLogin");


botaoLogin.addEventListener('click', (event) => {
  const emailGlobal = userLogin.value
  const senhaGlobal = senhaLogin.value
  const idUserGlobal = 0
  verificaUser(emailGlobal, senhaGlobal, idUserGlobal)
})

function verificaUser(emailGlobal, senhaGlobal, idUserGlobal) {

  const fimArquivo = globalUsers.length
  console.log(fimArquivo)
  let contador = 0

  globalUsers.forEach(element => {
    if (element.email == emailGlobal && element.senha == senhaGlobal) {
      // como  enviar o email e o id do user???
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






