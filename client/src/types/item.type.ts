import { IResponseData, Iuuid } from '@/module/common/types';
import { IUserResponse } from '@/types/user.type';

export interface IItem {
  method: string;
  name: string;
  start_data: string;
  end_data: string;
  min_price: string;
  category: string;
  description: string;
  file: string;
}

export interface IItemPut {
  item_id: Iuuid;
  price: string;
}

export interface IGetAllFiltersItem {
  category?: string;
  page: number;
}

export interface IActionsResponse extends IResponseData {
  id: Iuuid;
  buyer_id: Iuuid;
  item_id: Iuuid;
  price: string | number;
}

export interface IItemResponse extends IResponseData, IItem {
  user: IUserResponse;
  actions: IActionsResponse[];
}

export interface IGetMyAllItem {
  count: number;
  items: IItemResponse[];
}
