const express = require('express')
const router = express.Router()
const cervezasRouter = require('./cervezas')
const cursoRouter = require('./cursos')

router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.use('/cervezas', cervezasRouter)
router.use('/cursos', cursoRouter)

module.exports = router
