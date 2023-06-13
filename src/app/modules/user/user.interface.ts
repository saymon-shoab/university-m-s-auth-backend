import { Model } from 'mongoose'

// type defination of user model by typescript type...
export type IUser = {
  id: string
  role: string
  password: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
