const categories = require('https://drive.google.com/file/d/1CIqbf8jA8B0uue8rggM0OzAbfXFOKrah/view?usp=sharing');
const fs = require('fs');


const allCategories = (_, response) => {
  response.send(categories);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchCategoryForId = (request, response) => {
  const categoryEncontrado = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryEncontrado.length > 0) {
    response.status(200).send(categoryEncontrado)

  } else {
    response.status(404).send("Category não encontrado")
  }

};

const saveCategory = (request, response) => {

  const novoId = request.body.cpf + date()
  const novoUsuario = request.body

  categories.push(
    { id: novoId, ...novoUsuario }
  )
  fs.writeFile(`${categories}`, JSON.stringify(categories), (err) => { console.log(err) })
  response.status(201).send("Category incluido")
};


const deleteCategory = (request, response) => {
  const categoryEncontrado = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryEncontrado.length > 0) {
    posicao = categoryEncontrado.indexOf(categoryEncontrado.id);
    categories.splice(posicao, 1);
    fs.writeFile(`${categories}`, JSON.stringify(categories), (err) => { console.log(err) })
    response.status(200).send("Usuário Excluído")

  } else {
    response.status(404).send("Category não encontrado")
  }

}



const upDateCategory = (request, response) => {

  const categoryEncontrado = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryEncontrado.length > 0) {
    posicao = categoryEncontrado.indexOf(categoryEncontrado.id);
    const novoId = categoryEncontrado.id
    categories.splice(posicao, 1);
    const novoCategory = request.body
    categories.push(
      { id: novoId, ...novoCategory }
    )
    fs.writeFile(`${categories}`, JSON.stringify(categories), (err) => { console.log(err) })
    response.status(201).send("Category incluido")
  };
}

module.exports = { allCategories, searchCategoryForId, saveCategory, deleteCategory, upDateCategory }

