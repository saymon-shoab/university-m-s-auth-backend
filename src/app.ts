import { Application } from 'express'
import express = require('express')
import cors = require('cors')
import { UserRoutes } from './app/modules/users/user.route'
import globelErrorHandler from './app/middlewares/globerErrorHandler'

const app: Application = express()
// perser..
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// console.log(app.get('env'))
app.use('/api/v1/users/', UserRoutes)

// test ...
// app.get('/', (req: Request, res: Response, next: express.NextFunction) => {
//   // res.send('University management working successfully!')
//   throw new Error('ore baba error...')
//   // next('Ore Baba Error...')
// })
// global error handler....
app.use(globelErrorHandler)

export default app
