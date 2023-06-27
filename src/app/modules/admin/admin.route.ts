import express from 'express'
// import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller'
import { AdminValidation } from './admin.validation'
import validateRequest from '../../middlewares/validationRequest'
const router = express.Router()

router.get('/:id', AdminController.getSingleAdmin)
router.get('/', AdminController.getAllAdmins)

router.delete('/:id', AdminController.deleteAdmin)

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  AdminController.updateAdmin
)

export const AdminRoutes = router
