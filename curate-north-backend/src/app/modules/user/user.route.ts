import express from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidations.UserSchemaValidation),
  UserController.createUser,
);

router.get('/:id', UserController.getSingleUser);

router.get('/', UserController.getAllUser);

export const UserRoutes = router;
