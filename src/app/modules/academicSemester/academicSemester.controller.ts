// import { RequestHandler } from 'express'
import { academicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import { Request } from 'express'
import { Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'
import {
  IAcademicSemester,
  // IAcademicSemesterFilter,
} from './academicSemester.interface'
import { academicSemesterFilterableFiled } from './academicSemester.constant'
import httpStatus from 'http-status'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body
  // console.log(academicSemesterData)
  // console.log(academicSemesterData)
  const result = await academicSemesterService.createSemester(
    academicSemesterData
  )
  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: 'academic semester created successfully',
    data: result,
  })
})

const getSemester = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableFiled)
  const paginationOption = pick(req.query, paginationFields)
  // console.log(filters)
  console.log(paginationOption)
  const result = await academicSemesterService.getAllSemester(
    filters,
    paginationOption
  )
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester retrived successfully',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicSemesterService.getSinngleSemester(id)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester retrived successfully',
    data: result,
  })
})
const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await academicSemesterService.updateSemester(id, updatedData)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester updated successfully',
    data: result,
  })
})
const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicSemesterService.deleteSemester(id)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester deleted successfully',
    data: result,
  })
})
export const academicSemesterConroller = {
  createSemester,
  getSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester,
}
