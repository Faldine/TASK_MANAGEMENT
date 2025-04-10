const {login, register, getMe} = require("../controllers/auth.controllers");
const express = require("express");
const router = express.Router();
const {loginSchema, registerSchema} = require("../validations/auth.validations");
const validate = require("../middlewares/validate.middlwares");
const {requireAuth} = require ("../middlewares/auth.middlewares")


router.post("/login",validate(loginSchema), login)
router.post("/register", validate(registerSchema), register)
router.get("/me",requireAuth , getMe)

module.exports = router;