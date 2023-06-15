import { Schema, model } from 'mongoose'
import {
  IAcademicSemester,
  AcademicSeesterModel,
} from './academicSemester.interface'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitles,
} from './academicSemester.constant'
import ApiError from '../../../errors/ApiError'
import status from 'http-status'
// user Schema...

const academicSeesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  }
)
academicSeesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'ACADEMIC SEMESTER ALREADY EXIST')
  }
  next()
})

export const AcademicSemester = model<IAcademicSemester, AcademicSeesterModel>(
  'AcademicSemester',
  academicSeesterSchema
)
