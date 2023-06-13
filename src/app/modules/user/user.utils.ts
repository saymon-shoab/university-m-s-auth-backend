import { User } from './user.model'

export const findLastUserID = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

export const generetUserId = async () => {
  const currentID = (await findLastUserID()) || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentID) + 1).toString().padStart(5, '0')
  return incrementedId
  // initialUserId++;
  // return String(initialUserId).padStart(5,'0');
}
