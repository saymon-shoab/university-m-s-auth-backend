import config from '../../../config/index'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generetUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated increment id...
  const id = await generetUserId()
  user.id = id
  // default password ....
  if (!user.password) {
    // use default passeord
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create User!')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
