const recipes = require('https://drive.google.com/file/d/1l0vIsB2evUPXBdEH6FZLFdXFrtNRZCna/view?usp=sharing')
const fs = require('fs')


const allRecipes = (_, response) => {
  response.send(recipes);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchRecipeForId = (request, response) => {
  const recipeEncontrado = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeEncontrado.length > 0) {
    response.status(200).send(recipeEncontrado)

  } else {
    response.status(404).send("Recipe não encontrado")
  }

};

const saveRecipe = (request, response) => {

  const novoId = request.body.cpf + date()
  const novoUsuario = request.body

  recipes.push(
    { id: novoId, ...novoUsuario }
  )
  fs.writeFile(`${recipes}`, JSON.stringify(recipes), (err) => { console.log(err) })
  response.status(201).send("Recipe incluido")
};


const deleteRecipe = (request, response) => {
  const recipeEncontrado = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeEncontrado.length > 0) {
    posicao = recipeEncontrado.indexOf(recipeEncontrado.id);
    recipes.splice(posicao, 1);
    fs.writeFile(`${recipes}`, JSON.stringify(recipes), (err) => { console.log(err) })
    response.status(200).send("Usuário Excluído")

  } else {
    response.status(404).send("Recipe não encontrado")
  }

}



const upDateRecipe = (request, response) => {

  const recipeEncontrado = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeEncontrado.length > 0) {
    posicao = recipeEncontrado.indexOf(recipeEncontrado.id);
    const novoId = recipeEncontrado.id
    recipes.splice(posicao, 1);
    const novoRecipe = request.body
    recipes.push(
      { id: novoId, ...novoRecipe }
    )
    fs.writeFile(`${recipes}`, JSON.stringify(recipes), (err) => { console.log(err) })
    response.status(201).send("Recipe incluido")
  };
}

module.exports = { allRecipes, searchRecipeForId, saveRecipe, deleteRecipe, upDateRecipe }
