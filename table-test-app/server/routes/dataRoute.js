const  Router = require('express');
const router = new Router();
const dataController = require('../controller/dataController');

router.post('/', dataController.create);
router.get('/', dataController.getAll);

module.exports = router;
