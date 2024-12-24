/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TName, TUser } from './user.interface';
import { UserRole, UserStatus } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';

const UserNameSchema = new Schema<TName>({
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

const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
    },
    name: UserNameSchema,
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: true },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: UserRole,
        message: '{VALUE} is not valid',
      },
      default: 'user',
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: UserStatus,
        message: '{VALUE} is not valid!',
      },
      default: 'green',
      required: true,
    },
    profilePicture: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('User', UserSchema);
