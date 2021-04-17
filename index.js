const Serialport = require('serialport')
const Readline = Serialport.parsers.Readline
const express = require('express')
const servidor = express()
servidor.set('puerto', process.env.PORT || 80 || 8080)
servidor.set('view engine','hbs')
servidor.use(express.static("./views"))

servidor.listen(servidor.get('puerto'), () => {
    console.log("servidor ok")
})
let tarjeta = ""
let temperatura
let humedad
const port = new Serialport('COM4', {
    baudRate: 9600
})

const parser = port.pipe(new Readline({
    delimiter: '\r\n'
}))


parser.on('data', (data) => {
    tarjeta = data
    temperatura = tarjeta.substring(13,15)
    humedad = tarjeta.substring(25, 27)
    console.log(`${temperatura} ${humedad}`)
})
servidor.get('/', (req, res) => {
    res.render('inicio',
    {
        "temperatura":temperatura,
        "humedad":humedad
    })
})