const Cervezas = require('../models/Cervezas')
const { ObjectId } = require('mongodb')
const search = (req, res) => {
  const q = req.query.q
  res.send({ mensaje: `Buscada la cervza que contiene ${q}` })
}
const list = (req, res) => {
  Cervezas.find((err, cervezas) => {
    if (err) {
      res.status(500).send({})
    }
    res.status(200).send(cervezas)
  })
}

const show = (req, res) => {
  const id = req.params.id
  Cervezas.findById({ id: id }, (error, cervezas) => {
    if (error) res.send({ error })
    if (!ObjectId.isValid) return res.status(404).send({})
  })
}

const create = (req, res) => {
  res.sent({ mensaje: 'guardada una cerveza' })
}
const update = (req, res) => {
  res.sent({ mensaje: 'actualizada una cerveza' })
}
const remove = (req, res) => {
  const q = req.id
  res.send({ mensaje: `borrada la cervezas ${q}` })
}

const cervezasController = {
  search,
  list,
  show,
  create,
  update,
  remove
}
module.exports = cervezasController
