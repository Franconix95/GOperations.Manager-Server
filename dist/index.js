'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _events = require('./routes/events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use('/api/users', _users2.default);
app.use('/api/auth', _auth2.default);
app.use('/api/events', _events2.default);

app.listen(8081, function () {
  return console.log('Running on localhost:8081');
});