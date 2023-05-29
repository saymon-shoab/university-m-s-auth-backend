import { Application,Request,Response } from 'express';
import express = require('express')
import * as cors from 'cors'

const app : Application = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


export default app;