const express = require('express');
const router = express.Router();
const videoblogsCtrl = require('../../controllers/videoblogs');

router.get('/', videoblogsCtrl.index);
router.post('/', videoblogsCtrl.create);


module.exports = router;