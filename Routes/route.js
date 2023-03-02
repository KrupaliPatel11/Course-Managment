var userctrl = require("../controller/userController");
const router = require('express').Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/add', userctrl.getCourse);
router.get('/add/:id', userctrl.getOneCourse);
router.post('/add', userctrl.postCourse);
router.delete('/add/:id', userctrl.deleteCourse);
router.patch('/add/:id', userctrl.patchCourse);

module.exports = router;