import { RequestHandler } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import { Request } from 'express'
import { Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
// import HttpStatus from 'http-status'

const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body
    const result = await UserService.createStudent(student, userData)

    sendResponse(res, {
      statusCode: 400,
      success: true,
      message: 'user created successfully',
      data: result,
    })
  }
)

export const UserController = {
  createStudent,
}
