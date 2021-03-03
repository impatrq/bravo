const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.9qthf.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

// importar routes
const authRoutes = require('./Routes/auth');
// route middlewares
app.use('/api/user', authRoutes);

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funcionando'
    })
});

// iniciar server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})