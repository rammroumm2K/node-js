var express = require('express');
var router = express.Router();


var messages = require("../controllers/message.controller.js");

router.get('/',messages.readAll);

router.get('/list', messages.list);


router.get('/read/:id', messages.readById);



module.exports = router;