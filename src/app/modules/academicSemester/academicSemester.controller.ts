// import { RequestHandler } from 'express'
import { academicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import { Request } from 'express'
import { Response } from 'express'
import { NextFunction } from 'express'
import sendResponse from '../../../shared/sendResponse'
// import HttpStatus from 'http-status'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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
    next()
  }
)

export const academicSemesterConroller = {
  createSemester,
}
