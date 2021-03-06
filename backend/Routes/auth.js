const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

//validacion de datos
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    dni: Joi.number().min(20000000).max(70000000).required()
})


router.post('/register', async (req, res) => {

    const {error} = schemaRegister.validate(req.body)
    
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        ) }

    const mailexistente = await User.findOne({email: req.body.email});
     if (mailexistente) {
     return res.status(400).json(
        {error: 'La direccion de correo electronico ya ha sido registrado'}
    )}

    
    const dniexistente = await User.findOne({dni: req.body.dni});
    if (dniexistente) {
    return res.status(400).json(
       {error: 'El DNI ya esta registrado'}
   )}

// hash de contraseña
   const salt = await bcrypt.genSalt(10);
   const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({  
        name: req.body.name,
        email: req.body.email,
        password: password, //da igual si tienen el mismo valor
        dni: req.body.dni
    });
    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })

    } catch (error) {
        res.status(400).json({error})
    }
})


//login

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
  })

 router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({error: error.details[0].message})
    
    const user = await User.findOne({email:req.body.email});
    if (!user) return res.status(400).json({error:'Usuario no encontrado'});

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({error:'contraseña no válida'})
    
 //Genero una JWT
 const token = jwt.sign({
    name: user.name,
    dni:user.dni,
    email:user.email,
    id: user._id
 }, process.env.TOKEN_SECRET)

 res.header('auth-token', token).json({
    error: null,
    data: {token}
  })

})

//fin login
module.exports = router;
