const pessoas = require("../modal/data.json")

const getAll = (_, res) => {
  res.send(pessoas)
}

module.exports = { getAll }
