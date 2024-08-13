const { Router } = require('express')

const usersRoutes = require('./users.routes')
const movieNoteRoutes = require('./movie_notes.routes')



const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/movie_notes', movieNoteRoutes)


module.exports = routes
