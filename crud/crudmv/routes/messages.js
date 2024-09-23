var express = require('express');
var router = express.Router();


var messages = require("../controllers/message.controller.js");

router.get('/',messages.readAll);
//  ⭐⭐⭐⭐⭐⭐

router.get('/list', messages.list);
//  ⭐⭐⭐⭐⭐⭐

router.get('/read/:id', messages.readById);
//  ⭐⭐⭐⭐⭐⭐

router.get('/newmsg', messages.newmsg);
//  ⭐⭐⭐⭐⭐⭐

router.post('/create', messages.create);
//  ⭐⭐⭐⭐⭐⭐

router.get('/edit/:id', messages.updateById);
//  ⭐⭐⭐⭐⭐⭐

router.post('/update/:id', messages.update);
//  ⭐⭐⭐⭐⭐⭐

router.get('/confirm/:id', messages.deleteById);
//  ⭐⭐⭐⭐⭐⭐

router.post('/delete/:id', messages.delte);
//  ⭐⭐⭐⭐⭐⭐

module.exports = router;