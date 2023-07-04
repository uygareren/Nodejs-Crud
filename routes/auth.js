const express = require('express')
const router = express.Router();

const authControllers = require('../controllers/auth')



router.post("/register", authControllers.postRegister)
router.post("/login", authControllers.postLogin)


module.exports = router;