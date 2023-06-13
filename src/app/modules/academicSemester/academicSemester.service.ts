import ApiError from '../../../errors/ApiError'
import { academicSemesterTitleCodeMapper } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import HttpStatus from 'http-status'

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(HttpStatus.BAD_REQUEST, 'invalid Semester code')
  }
  const result = await AcademicSemester.create(payload)
  console.log(payload)
  return result
}

export const academicSemesterService = {
  createSemester,
}
