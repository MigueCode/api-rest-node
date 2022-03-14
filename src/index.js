const server = require('express'), morgan = require('morgan')
const app = server()
const ruta = require('./routes/index')


// Configuraciones
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(server.urlencoded({ extended: false }));
app.use(server.json());

// Web Service GET
// app.get('/', (req, res) => {
//     res.json(
//         { "title": "hola mundo" }
//     )
// })


// Rutas
app.use(ruta)


// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`El servidor esta escuchando en el puerto ${app.get('port')}`)
})