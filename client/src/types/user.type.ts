import { IResponseData } from '@/module/common/types';

export interface IUser {
  avatar: string;
  email: string;
  first_name: string;
}

export interface IUserResponse extends IResponseData, IUser {}
