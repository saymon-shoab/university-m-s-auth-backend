import express from 'express'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'
import validateRequest from '../../middlewares/validationRequest'
const router = express.Router()

// create student ...
router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
)

// create faculty ...

// create admin..

export const UserRoutes = router
