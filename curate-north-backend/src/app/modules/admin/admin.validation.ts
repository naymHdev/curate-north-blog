import { z } from 'zod';
import { BloodGroup, Gender } from './admin.constant';

const adminNameValidationSchema = z.object({
  firstName: z
    .string({ required_error: 'First name must be required' })
    .min(3)
    .max(12),
  middleName: z.string().max(5).optional(),
  lastName: z.string().min(3).max(12).optional(),
});

const adminValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    designation: z
      .string({ required_error: 'Define your designation!' })
      .optional(),
    name: adminNameValidationSchema,
    email: z.string({ required_error: 'Email must be required' }),
    gender: z.enum([...Gender] as [string, ...string[]]),
    dateOfBirth: z.string({ required_error: 'Birth date required!' }).date(),
    contactNo: z.string({
      required_error: 'Contract number must be required!',
    }),
    emergencyContactNo: z.string({
      required_error: 'Must be required emergency contact!',
    }),
    bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]),
    presentAddress: z.string().optional(),
    permanentAddress: z.string({
      required_error: 'Permanent address is required',
    }),
    isDeleted: z.boolean().default(false),
  }),
});

export const AdminValidations = { adminValidationSchema };
