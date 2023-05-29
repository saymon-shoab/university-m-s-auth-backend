import { Application, Request, Response } from 'express'
import express = require('express')
import cors = require('cors')

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
