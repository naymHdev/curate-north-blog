import { z } from 'zod';

// Define Zod schema for TName
const NameSchemaValidation = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, { message: 'First name must be at least 3 characters long' })
    .max(10, { message: 'First name cannot exceed 10 characters' }),
  middleName: z
    .string()
    .trim()
    .max(10, { message: 'Middle name cannot exceed 10 characters' })
    .optional(),
  lastName: z
    .string()
    .trim()
    .min(3, { message: 'Last name must be at least 3 characters long' })
    .max(10, { message: 'Last name cannot exceed 10 characters' }),
});

// Define Zod schema for TUser
export const UserSchemaValidation = z.object({
  name: NameSchemaValidation,
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .nonempty({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
  needsPasswordChange: z.boolean().default(true),
  role: z.enum(['user', 'admin', 'editor', 'subscriber']).default('user'),
  status: z.enum(['green', 'yellow', 'red']).default('green'),
  profilePicture: z.string().optional(),
  isDeleted: z.boolean().default(false),
});
