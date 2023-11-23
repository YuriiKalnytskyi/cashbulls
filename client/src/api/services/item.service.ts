import { EnhancedWithAuthHttpService, HttpFactoryService } from '@/module/common/services';
import { ExpectedFromQuery, IMessage } from '@/module/common/types';
import { IGetAllFiltersItem, IGetMyAllItem, IItem, IItemPut } from '@/types';

class ItemService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  async getAll(data: Partial<IGetAllFiltersItem>): Promise<ExpectedFromQuery<IGetMyAllItem>> {
    return this.httpService.post<IGetMyAllItem, Partial<IGetAllFiltersItem>>('/item/all', data);
  }

  async post(data: IItem): Promise<ExpectedFromQuery<IMessage>> {
    return this.httpService.post<IMessage, IItem>('/item', data);
  }

  async put(data: IItemPut): Promise<ExpectedFromQuery<IMessage>> {
    return this.httpService.put<IMessage, IItemPut>('/item', data);
  }
}

const factory = new HttpFactoryService();
export const itemService = new ItemService(factory.createAuthHttpService());
