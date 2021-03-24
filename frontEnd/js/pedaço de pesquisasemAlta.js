

window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});


function doMap() {
  const nameEmailArray = people.results.map(person => {
    return {
      name: person.name,
      email: person.email
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}

function doFilter() {
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach(person => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  // let sumAges = 0;

  // for (let i = 0; i < people.results.length; i++) {
  //   var current = people.results[i];
  //   sumAges += current.dob.age;
  // }

  // console.log(sumAges);
}

function doFind() {
  const found = people.results.find(person => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

function doSome() {
  const found = people.results.some(person => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

function doEvery() {
  const every = people.results.every(person => {
    return person.nat === 'BR';
  });

  console.log(every);
}

function doSort() {
  const mappedNames = people.results
    .map(person => {
      return {
        name: person.name.first
      };
    })
    .filter(person => person.name.startsWith('A'))
    .sort((a, b) => {
      return b.name.length - a.name.length;
      // return a.name.localeCompare(b.name);
    });

  console.log(mappedNames);
}


const receitasSort =
  fruit.sort(); // ['apples', 'bananas', 'cherries']

// for (i = 0; i < featuresSingle.length; i++) {
//   console.log("Dentro do for:")
//   featuresSingle[i].addEventListener('mouseover', (event) => {
//     faceFeatures = event.target.id

//     changeFaceFeatures(faceFeatures)
//   })

//   featuresSingle[i].addEventListener('mouseout', (event) => {
//     faceFeatures = event.target.id

//     returnFaceFeatures(faceFeatures)
//   })

//   featuresSingle[i].addEventListener('click', (event) => {
//     faceFeatures = event.target.id

//     goFaceFeatures(faceFeatures)
//   })


// }

// const changeFaceFeatures = (faceFeatures) => {
//   console.log("Trocar a face", faceFeatures)
//   switch (faceFeatures) {
//     case "armazenar":
//       console.log("Armazenar")
//       const armazenar = document.querySelector("#armazenar");
//       // armazenar.style.transform = "rotateY(180deg)"
//       // armazenar.innerHTML = "Seus dados serão armazenados de forma facilitar suas pesquisas e localização de seus dados de forma categorizada, organizada."

//       break

//     case "alarme":
//       console.log("Alarme")
//       const alarme = document.querySelector("#alarme");
//       break

//     case "doencas":
//       console.log("Doenças")
//       const doencas = document.querySelector("#doencas");
//       break

//     case "agenda":
//       console.log("Agenda")
//       const agenda = document.querySelector("#agenda");
//       break;
//     case "pesquisa":
//       console.log("Pesquisa")
//       const pesquisa = document.querySelector("#pesquisa");
//       break

//     case "vacina":
//       console.log("Vacinas")
//       const vacina = document.querySelector("#vacina");
//       break

//     case "alertas":
//       console.log("Alertas")
//       const alertas = document.querySelector("#alertas");
//       break

//     case "labs":
//       console.log("Laboratórios")
//       const labs = document.querySelector("#labs");
//       break

//     default:
//       console.log(`Não encontrei o que vc quer mudar ${faceFeatures}.`);
//   }


// }







