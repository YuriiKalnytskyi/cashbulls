import {UseQueryResult, useQuery} from 'react-query';

import {itemService} from '@/api/services/item.service';
import {APP_KEYS} from '@/module/common/constants';
import {IGetAllFiltersItem, IGetMyAllItem} from '@/types';

const getAll = (
    data: Partial<IGetAllFiltersItem>,
    options?: any
): UseQueryResult<IGetMyAllItem | undefined> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery([APP_KEYS.QUERY_KEYS.ALL_ITEMS, data], () => itemService.getAll(data), {
        ...options
    });
}


export const useItemQuery = {
    getAll
};
