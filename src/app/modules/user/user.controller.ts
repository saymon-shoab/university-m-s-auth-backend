import { RequestHandler } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import { Request } from 'express'
import { Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
// import HttpStatus from 'http-status'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { user } = req.body
    const result = await UserService.createUser(user)

    sendResponse(res, {
      statusCode: 400,
      success: true,
      message: 'user created successfully',
      data: result,
    })
  }
)

export const UserController = {
  createUser,
}
