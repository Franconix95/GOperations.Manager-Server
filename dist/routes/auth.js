'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _login = require('../shared/validations/login');

var _login2 = _interopRequireDefault(_login);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
//import bcrypt from 'bcrypt';


router.post('/', function (req, res) {
  var _req$body = req.body,
      identifier = _req$body.identifier,
      password = _req$body.password;


  _user2.default.query({
    where: { username: identifier },
    orWhere: { email: identifier }
  }).fetch().then(function (user) {
    if (user) {
      //const password_digest = data.password;//bcrypt.hashSync(password, 10);
      //if(bcrypt.compareSync(password, user.get('password_digest')))
      if (password === user.get('password_digest')) {
        var token = _jsonwebtoken2.default.sign({
          id: user.get('id'),
          username: user.get('username')
        }, _config2.default.jwtSecret);
        res.json({ token: token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

exports.default = router;