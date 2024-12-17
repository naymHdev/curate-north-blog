export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TUserRole = 'user' | 'admin' | 'editor' | 'subscriber';
export type TUserStatus = 'green' | 'yellow' | 'red';

export type TUser = {
  id: string;
  name: TName;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  role: TUserRole;
  status: TUserStatus;
  profilePicture: string;
  isDeleted: boolean;
};
