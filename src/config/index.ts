import * as dotenv from 'dotenv'
import * as  path  from 'path'
dotenv.config({path: path.join(process.cwd(),'.env')})

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL
}