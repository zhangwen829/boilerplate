const router = require('express').Router();


router.get('/', function (req, res, next) { /* etc */ });

router.post('/', function (req, res, next) { /* etc */ });

router.put('/:userId', function (req, res, next) { /* etc */ });

router.delete('/:userId', function (req, res, next) { /* etc */ });

module.exports = router;