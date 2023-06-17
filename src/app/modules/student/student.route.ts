import express from 'express'
import { studentController } from './student.controller'
import validateRequest from '../../middlewares/validationRequest'
import { StudentValidaion } from './student.validation'

const router = express.Router()

router.get('/:id', studentController.getSingleStudent)
router.get('/', studentController.getAllStudent)

router.delete('/:id', studentController.deleteStudent)

// create student ...
router.patch(
  '/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  studentController.updateStudent
)

// create faculty ...

// create admin..

export const StudentRoutes = router
