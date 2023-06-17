// import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { Request } from 'express'
import { Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

import httpStatus from 'http-status'
import { studentFilterableFields } from './student.constant'
import { IStudent } from './student.interface'
import { studentService } from './student.service'

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields)
  const paginationOption = pick(req.query, paginationFields)
  console.log(filters)
  console.log(paginationOption)
  const result = await studentService.getAllStudent(filters, paginationOption)
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student retrived successfully',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await studentService.getSingleStudent(id)
  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student retrived successfully',
    data: result,
  })
})
const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await studentService.updateStudent(id, updatedData)
  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student updated successfully',
    data: result,
  })
})
const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await studentService.deleteStudent(id)
  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student deleted successfully',
    data: result,
  })
})
export const studentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
}
