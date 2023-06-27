import { Application } from 'express'
import express = require('express')
import cors = require('cors')
import globelErrorHandler from './app/middlewares/globerErrorHandler'
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
import routes from './app/routes'
// import ApiError from './errors/ApiError'
import status from 'http-status'
// import { generateFacultyId } from './app/modules/user/user.utils'
// import { generateStudentrId } from './app/modules/user/user.utils'

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

// handle not found....
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(status.NOT_FOUND).json({
      success: false,
      message: 'Non Found',
      errorMessage: [
        {
          path: req.originalUrl,
          message: 'API Not Found...',
        },
      ],
    })
    next()
  }
)

// const academicSemester = {
//   code: '01',
//   year: '2025',
// }
// const testId = async () => {
//   const testId = await generateFacultyId(academicSemester)
//   console.log(testId)
// }
// testId()

export default app
