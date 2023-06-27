/* eslint-disable no-undef */
import mongoose from 'mongoose'
import app from './app'
// import dotenv from 'dotenv'
// const port = 5050
import config from './config/index'
import { infologger, errorLogger } from './shared/logger'
import { Server } from 'http'
// dotenv.config()
process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})
let server: Server

async function DBCoccection() {
  // console.log(config.database_url)
  // console.log(config.port)
  try {
    await mongoose.connect(config.database_url as string)
    // await mongoose.connect(process.env.DATABASE_URL as string)
    infologger.info('database connection successfull')
    server = app.listen(config.port, () => {
      infologger.info(`Example app listening on port ${config.port}`)
    })
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    errorLogger.error('server connection failed', error)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    }
    process.exit(1)
  })
}

DBCoccection()

// console.log(x)

// process.on('SIGTERM', () => {
//   infologger.info('SIGTERM is received')
//   if (server) {
//     server.close()
//   }
// })
