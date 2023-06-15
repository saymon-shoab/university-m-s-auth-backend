import express from 'express'
import validateRequest from '../../middlewares/validationRequest'
import { AcademicFacultyController } from './academicFaculty.controller'
import { AcadeemicFacultyValidation } from './academicFaculty.validation'
const router = express.Router()

router.post(
  '/create-faculty',
  validateRequest(AcadeemicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty
  // UserController.createUser
)
router.get('/:id', AcademicFacultyController.getSingleFaculty)
router.patch(
  '/:id',
  validateRequest(AcadeemicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyController.updateFaculty
)

router.delete('/:id', AcademicFacultyController.deleteFaculty)

router.get('/', AcademicFacultyController.getAllFaculties)

export const AcademicFacultyRoutes = router
