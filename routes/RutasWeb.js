const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("inicio")
})

router.get('/personalizacion', (req, res) => {
    res.render("personalizacion")
})

module.exports = router;