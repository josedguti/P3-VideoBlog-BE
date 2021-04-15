const express = require('express');
const router = express.Router();
const videoblogsCtrl = require('../../controllers/videoblogs');

router.get('/', videoblogsCtrl.index);
router.post('/', videoblogsCtrl.create);
router.delete('/:id', videoblogsCtrl.delete);
router.put('/:id', videoblogsCtrl.update);


module.exports = router;