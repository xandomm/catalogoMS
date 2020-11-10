const express = require('express');
const bodyParser = require('body-parser');
const authConfig = require('../config/auth.json');
const jwt = require('jsonwebtoken');
const jwtValidation = require('./../utils/jwt-validation');
const bcrypt = require('bcrypt');
const userRouter = express.Router();

const jsonBodyParser = bodyParser.json();

const logic = require('./../logic/');
const TOKEN_SECRET = authConfig.secret
const TOKEN_EXP = 86400

const jwtValidator = jwtValidation(TOKEN_SECRET);
// Register
userRouter.post('/register', jsonBodyParser, (req, res) => {
    const {
        body: { name, email, password }
    } = req;

    logic
        .register(name, email, password)
        .then(user =>
            res.status(201).json({
                status: 'OK',
                message: 'User registered succesfully',
                user
            })
        )
        .catch(({ message }) =>
            res.status(400).json({ status: 'KO', message })
        );
});

// Authenticate
userRouter.post('/authenticate', jsonBodyParser, (req, res) => {
    const {
        body: { email, password }
    } = req;

    logic
        .authenticate(email, password)
        .then(({ _id: id, email }) => {
            const token = jwt.sign({ id }, TOKEN_SECRET, {
                expiresIn: 864000
            });
            
            res.json({
                status: 'OK',
                message: 'User authenticated succesfully',
                user: { id, email },
                token
            });
        })
        .catch(({ message }) =>
            res.status(403).json({ status: 'KO', message })
        );
});

// Retrieve user data
userRouter.get('/user/:id', jwtValidator, (req, res) => {
    const { id } = req.params;

    logic
        .retrieveUserById(id)
        .then(user =>
            res.json({
                status: 'OK',
                message: 'User data retrieved correctly',
                user
            })
        )
        .catch(({ message }) =>
            res.status(404).json({ status: 'KO', message })
        );
});

module.exports = userRouter;
