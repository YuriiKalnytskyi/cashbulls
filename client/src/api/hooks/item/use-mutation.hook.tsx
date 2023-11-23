import {AxiosError} from 'axios';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';

import {itemService} from '@/api/services/item.service';
import {toastContainer} from '@/module/common/component';
import {APP_KEYS} from '@/module/common/constants';
import {useConnectionSocket} from '@/module/common/hooks';
import {IMessage} from '@/module/common/types';
import {IAuthError, IItem, IItemPut} from '@/types';

const onError = (_err: AxiosError<IAuthError>) => {
    const err = _err.response?.data as IAuthError;
    toastContainer.error({title: err.message ?? _err.message}).then();
};

const onSuccess = async ({message}: IMessage) => {
    toastContainer.success({title: message}).then();
};

const post = (socket: any) => {
    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation<any, AxiosError<IAuthError>, IItem>((data: IItem) => itemService.post(data), {
        onSuccess: async (data: IMessage) => {
            await onSuccess(data);

            navigate(APP_KEYS.ROUTER_KEYS.HOME);

            socket.emit('send_item');
        },
        onError: (_err: AxiosError<IAuthError>) => {
            const err = _err.response?.data as IAuthError;

            if (err.errorCode === 210) {
                toastContainer.error({title: err.message ?? _err.message, text: err.error}).then();
            } else {
                onError(_err);
            }
        }
    });
};

const put = (socket: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation<any, AxiosError<IAuthError>, IItemPut>(
        (data: IItemPut) => itemService.put(data),
        {
            onSuccess: async (data: IMessage) => {
                await onSuccess(data);
                socket.emit('send_item');
            },

            onError: (_err: AxiosError<IAuthError>) => {
                onError(_err);
            }
        }
    );
};

export const useItemMutation = {
    post,
    put
};
