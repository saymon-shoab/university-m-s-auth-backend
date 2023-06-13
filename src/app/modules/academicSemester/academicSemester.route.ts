import express from 'express'
import validateRequest from '../../middlewares/validationRequest'
import { academicSemesterConroller } from './academicSemester.controller'
import { academicSemesterValidation } from './academicSemester.validation'
const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterConroller.createSemester
  // UserController.createUser
)
export const AcademicSemesterRoutes = router
