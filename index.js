
// DB Conection
const mongoose = require('mongoose');
const DB_USER = 'eduardogrq'
const DB_PASSWORD = 'Tuyyosomos1mismo'
const DB_HOST = 'kodemia11g.utnt4.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

//Schema

const KoderSchema = new mongoose.Schema({
    name: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    lastName: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 99,
        require: true
    },
    gender: {
        type: String,
        maxLenght: 1,
        required: true,
        enum:['m', 'f'],
        required: true
    }
})

const Koder = mongoose.model('koders', KoderSchema)

 mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((conn) => {
        // Consulta de koders
        // console.log('DB Connection :D ', conn)
        // Koder.find({ name: "Mariana" })
        //     .then((kodersFound) => {
        //         console.log('Koders encontrados: ', kodersFound)
        //     })
        //     .catch((error) => {
        //         console.log('error: ', error)
        //     })

        Koder.create({
            name: 'Fabian',
            lastName: 'Higareda',
            age: 31,
            gender: 'm'
        })
            .then((koderCreated) => {
                console.log('koder creado: ', koderCreated)
            })
            .catch((error) => {
                console.log('error: ', error)
            })
    })
    .catch((error) => {
        console.log('error: ', error)
    })
