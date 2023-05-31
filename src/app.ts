import { Application, Request, Response } from 'express'
import express = require('express')
import cors = require('cors')
import userRouter from './app/modules/users/user.route'

const app: Application = express()
// perser..
app.use(express.json())
app.use(cors())

// app.use(express.urlencoded({ extended: true }))
// application routess....
app.use('/api/v1/users/', userRouter)
app.get('/', async (req: Request, res: Response) => {
  res.send('University management working successfully!')
})

export default app
