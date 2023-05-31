import mongoose from 'mongoose'
import app from './app'
import dotenv from 'dotenv'
const port = 5050
// import config from './config/index'
dotenv.config()

async function DBCoccection() {
  try {
    // await mongoose.connect(config.database_url as string)
    await mongoose.connect(process.env.DATABASE_URL as string)
    console.log('database connection successfull')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.log(error, 'server connection failed')
  }
}

DBCoccection()
