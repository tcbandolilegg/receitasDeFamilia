


const featuresSingle = document.querySelectorAll(".featuresSingle");


for (i = 0; i < featuresSingle.length; i++) {
  console.log("Dentro do for:")
  featuresSingle[i].addEventListener('mouseover', (event) => {
    faceFeatures = event.target.id

    changeFaceFeatures(faceFeatures)
  })

  featuresSingle[i].addEventListener('mouseout', (event) => {
    faceFeatures = event.target.id

    returnFaceFeatures(faceFeatures)
  })

  featuresSingle[i].addEventListener('click', (event) => {
    faceFeatures = event.target.id

    goFaceFeatures(faceFeatures)
  })


}

const changeFaceFeatures = (faceFeatures) => {
  console.log("Trocar a face", faceFeatures)
  switch (faceFeatures) {
    case "armazenar":
      console.log("Armazenar")
      const armazenar = document.querySelector("#armazenar");
      // armazenar.style.transform = "rotateY(180deg)"
      // armazenar.innerHTML = "Seus dados serão armazenados de forma facilitar suas pesquisas e localização de seus dados de forma categorizada, organizada."

      break

    case "alarme":
      console.log("Alarme")
      const alarme = document.querySelector("#alarme");
      break

    case "doencas":
      console.log("Doenças")
      const doencas = document.querySelector("#doencas");
      break

    case "agenda":
      console.log("Agenda")
      const agenda = document.querySelector("#agenda");
      break;
    case "pesquisa":
      console.log("Pesquisa")
      const pesquisa = document.querySelector("#pesquisa");
      break

    case "vacina":
      console.log("Vacinas")
      const vacina = document.querySelector("#vacina");
      break

    case "alertas":
      console.log("Alertas")
      const alertas = document.querySelector("#alertas");
      break

    case "labs":
      console.log("Laboratórios")
      const labs = document.querySelector("#labs");
      break

    default:
      console.log(`Não encontrei o que vc quer mudar ${faceFeatures}.`);
  }


}













// const buttons = document.querySelectorAll("button")
// for (i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', (event) => {
//     buttonClass = event.target.classList;
//     changeColor(buttonClass)
//   })
// }

// for (i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('mouseover', (event) => {
//     cursorPointer = event.target.classList;
//     //COMO MUDAR O PONTEIRO DO MOUE?
//     changePointer(cursorPointer)
//   })
// }

// const changePointer = (cursorPointer) => {
//   if (cursorPointer == "advanceButton") {
//     const mouseCursor = document.querySelector(".advanceButton")
//     mouseCursor.style.cursor = "pointer"
//   } else {
//     const mouseCursor = document.querySelector(".backButton")
//     mouseCursor.style.cursor = "pointer"
//   }
// }

// const changeColor = (buttonClass) => {
//   const divChange = document.querySelector(".color-frame")
//   const nameChange = document.querySelector(".textColorName")
//   const hexaChange = document.querySelector(".hexaColorName")

//   if (buttonClass == "advanceButton") {
//     if (selectColor < (totColors - 1)) {
//       selectColor++
//     } else {
//       alert("Ultima cor")
//     }
//     divChange.style.backgroundColor = `${colors[selectColor].hexaColor}`
//     nameChange.innerHTML = `${colors[selectColor].nameColor}`
//     hexaChange.innerHTML = `${colors[selectColor].hexaColor}`
//   } else {
//     if (selectColor != 0) {
//       selectColor--
//     } else {
//       alert("Primeira cor")
//     }
//     divChange.style.backgroundColor = `${colors[selectColor].hexaColor}`
//     nameChange.innerHTML = `${colors[selectColor].nameColor}`
//     hexaChange.innerHTML = `${colors[selectColor].hexaColor}`
//   }
// }
