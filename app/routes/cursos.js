const express = require('express')
const router = express.Router()

router.get('/cervezas', (req, res) => {
  res.json({ mensaje: '¡listado de cursos!' })
})

router.post('/cervezas', (req, res) => {
  res.json({ mensaje: 'curso añadido!' })
})

router.delete('/cervezas', (req, res) => {
  res.json({ mensaje: 'curso borrado!' })
})

module.exports = router
