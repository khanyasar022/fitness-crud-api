const express = require('express')
const router = express.Router()
const UserControllers = require('./controllers')

router.post('/', UserControllers.userPost)
router.get('/', UserControllers.usersGet)
router.get('/:id', UserControllers.userGet)
router.patch('/:id', UserControllers.userUpdate)
router.delete('/:id', UserControllers.userDelete)

module.exports = router