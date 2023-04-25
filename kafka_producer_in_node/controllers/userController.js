const express = require('express');
const router = express.Router();
const UserSvc = require('../services/userService');
const oUserService = new UserSvc();
// routes

module.exports = class UserController {
    authenticate = async (req, res, next) => {
        oUserService.authenticate(req.body.username,req.body.password)
        .then( user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
    };
    getAll = async (req, res, next) => {
        userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
    };
  } 
