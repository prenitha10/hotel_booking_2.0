const express = require('express')
const {loginfun,signup}=require('../controller/login.js')
const login = express.Router();

login.post('/signup',signup);
login.post('/login',loginfun);

module.exports=login;
