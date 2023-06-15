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
router.get('/:id', academicSemesterConroller.getSingleSemester)
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterConroller.updateSemester
)

router.delete('/:id', academicSemesterConroller.deleteSemester)

router.get('/', academicSemesterConroller.getSemester)

export const AcademicSemesterRoutes = router
