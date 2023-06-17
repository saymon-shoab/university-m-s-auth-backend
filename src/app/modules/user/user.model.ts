import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'
// user Schema...

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    // faculty:{
    //   type:Schema.Types.ObjectId,
    //   ref:'Student'
    // },
    // Admin:{
    //   type:Schema.Types.ObjectId,
    //   ref:'Student'
    // }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)
export const User = model<IUser, UserModel>('User', userSchema)
