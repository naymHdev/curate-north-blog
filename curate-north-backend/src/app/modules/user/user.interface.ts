export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TUser = {
  name: TName;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'user' | 'admin' | 'editor' | 'subscriber';
  status: 'green' | 'yellow' | 'red';
  profilePicture: string;
  isDeleted: boolean;
};
