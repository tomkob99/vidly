const config = require('config');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  // console.log('req.body.email=', req.body.email );
  if (!user) return res.status(400).send('invalid user or password')

  // console.log('req.body.password=', req.body.password);
  // console.log('user.password=', user.password);
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  
  console.log('user.validPassword=', validPassword);
  if (!validPassword) return res.status(400).send('invalid user or password');

  const token = user.generateAuthToken();
  

  res.header('x-auth-token', token).send(token);
});


function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema);
}

module.exports = router;