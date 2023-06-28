import express from 'express'
import validateRequest from '../../../middlewares/validationRequest'
import { AuthValidation } from './auth.validation'
import { authController } from './auth.controller'
// import validateRequest from '../../middlewares/validateRequest';

const router = express.Router()

router.post('/login',validateRequest(AuthValidation.loginZodSchema),authController.loginUser )
// router.get('/', AdminController.getAllAdmins)

// router.delete('/:id', AdminController.deleteAdmin)

// router.patch(
//   '/:id',
//   validateRequest(AdminValidation.updateAdmin),
//   AdminController.updateAdmin
// )

export const AuthRoutes = router
