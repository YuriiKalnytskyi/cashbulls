import {useEffect} from 'react';
import {useQueryClient} from 'react-query';
import io from 'socket.io-client';

import {APP_KEYS} from '@/module/common/constants';

let socket: any = null;

export const useConnectionSocket = () => {
    const client = useQueryClient();

    useEffect(() => {

        const url = process.env.VITE_APP_SERVER_URL.replace('api', '');

        socket = io(url ?? '', {
            transports: ['websocket', 'polling']
        });

        socket.on('handler_send_item', async () => {
            await client.invalidateQueries(APP_KEYS.QUERY_KEYS.ALL_ITEMS);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, []);

    return {socket};
};
