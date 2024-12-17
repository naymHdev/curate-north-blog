import { z } from 'zod';
import { UserRole, UserStatus } from './user.constant';

const NameSchemaValidation = z.object({
  firstName: z.string().min(3).max(10),
  middleName: z.string().max(5).optional(),
  lastName: z.string().min(3).max(10),
});

const UserSchemaValidation = z.object({
  body: z.object({
    id: z.string().default(''),
    name: NameSchemaValidation,
    email: z.string().email(),
    password: z.string().min(6).max(20),
    needsPasswordChange: z.boolean().default(true),
    role: z.enum([...UserRole] as [string, ...string[]]),
    status: z.enum([...UserStatus] as [string, ...string[]]),
    profilePicture: z.string().optional(),
    isDeleted: z.boolean().default(false),
  }),
});

export const UserValidations = {
  UserSchemaValidation,
};
