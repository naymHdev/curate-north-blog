import { model, Schema } from 'mongoose';
import { TAdmin, TAdminName } from './admin.interface';
import { Gender } from './admin.constant';

const AdminNameSchema = new Schema<TAdminName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
    minlength: [3, 'First name minimum should be 3 characters'],
    maxlength: [10, 'First name can not be more than 10 characters'],
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [10, 'Middle name can not be more than 10 characters'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
    minlength: [3, 'Last name minimum should be 3 characters'],
    maxlength: [10, 'Last name can not be more than 10 characters'],
  },
});

const AdminSchema = new Schema<TAdmin>({
  id: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  },
  name: AdminNameSchema,
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: {
      values: Gender,
      message: '${VALUE} is not valid',
    },
  },
  dateOfBirth: {
    type: Date,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    trim: true,
  },
  presentAddress: {
    type: String,
    required: true,
    trim: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const AdminModel = model<TAdmin>('Admin', AdminSchema);
