import { Application } from 'express'
import express = require('express')
import cors = require('cors')
import globelErrorHandler from './app/middlewares/globerErrorHandler'
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
import routes from './app/routes'
// import ApiError from './errors/ApiError'

const app: Application = express()
// perser..
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// console.log(app.get('env'))
app.use('/api/v1/', routes)

// test ...
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   //   console.log(x)
//   Promise.reject(new Error('testing error logger...'))
// })
// global error handler....
app.use(globelErrorHandler)

export default app
