import { User } from './user.model'
import { IAcademicSemester } from '../academicSemester/academicSemester.interface'

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastStudent?.id ? lastStudent.id.substring(4) : undefined
}

// export const generateStudentId = async (
//   academicSemester: IAcademicSemester | null
// ) => {
//   const currentID =
//     (await findLastStudentId()) || (0).toString().padStart(5, '0')
//   let incrementedId = (parseInt(currentID) + 1).toString().padStart(5, '0')
//   incrementedId = `${academicSemester.year.substring(2)}${
//     academicSemester.code
//   }${incrementedId}`
//   // console.log(incrementedId)
//   return incrementedId
// }

export const generateStudentId = async (
  academicSemester: IAcademicSemester | null
): Promise<string> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0') //00000
  //increment by 1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  //20 25
  incrementedId = `${academicSemester?.year.substring(2)}${
    academicSemester?.code
  }${incrementedId}`

  return incrementedId
}

export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined
}

export const generateFacultyId = async () => {
  const currentID =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0')
  let incrementedId = (parseInt(currentID) + 1).toString().padStart(5, '0')
  incrementedId = `F-${incrementedId}`
  // console.log(incrementedId)
  return incrementedId
}
