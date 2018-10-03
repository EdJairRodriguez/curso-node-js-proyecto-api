const express = require('express') // llamamos a Express
var app = express()
const router = require('./routes')

app.use('/api', router)

console.log(router)

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

console.log('App todavia no esta escuchando')
