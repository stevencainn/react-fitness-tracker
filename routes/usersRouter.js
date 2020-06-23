// usersRouter.js

const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/users_controller');

router
    .route('/')
    .get(getUsers)
router
    .route('/add')
    .post(addUser);

module.exports = router;

