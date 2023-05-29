import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
async function DBCoccection() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database connection successfull')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.log(error, 'server connection failed')
  }
}

DBCoccection()
