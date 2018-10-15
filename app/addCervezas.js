const Cervezas = require('./models/Cervezas')

const miCerveza = new Cervezas({ nombre: 'Ambar' })

miCerveza.save((err, miCerveza) => {
  if (err) return console.error(err)
  console.log(`Guardada en bbdd ${miCerveza.name}`)
})
