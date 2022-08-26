  const router = require('express').Router()
const {getAll, getById, register, remove, edit} = require('./users.http')

router.route('/')
    .get(getAll)
    .post(register)

router.route('/users/:id')
    .get(getById)
    .put(edit)
    .delete(remove)

router.route('/users/me/posts')
//  .get (llename)
//  .put(llename)
// .delete(llename)
//router.get('/users/me/posts/:id', llename)

exports.router = router     