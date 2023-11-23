import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { authService } from '@/api/services';
import { toastContainer } from '@/module/common/component';
import { APP_KEYS } from '@/module/common/constants';
import { IMessage, IToken } from '@/module/common/types';
import { IAuthError, ILogin, ISingUp } from '@/types';

const onError = async (_err: AxiosError<IAuthError>) => {
  const err = _err.response?.data as IAuthError;
  await toastContainer.error({ title: err.message ?? _err.message });
};

const onSuccess = async ({ message }: IMessage) => {
  await toastContainer.success({ title: message });
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<any, AxiosError<IAuthError>, ILogin>(
    (data: ILogin) => authService.login(data),
    {
      onSuccess: ({ token }: IToken) => {
        localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, token);

        navigate(APP_KEYS.ROUTER_KEYS.HOME);
      },
      onError: (err: AxiosError<IAuthError>) => onError(err)
    }
  );
};

export const useSingUp = () => {
  const navigate = useNavigate();

  return useMutation<any, AxiosError<IAuthError>, ISingUp>(
    (data: ISingUp) => authService.singUp(data),
    {
      onSuccess: async (data) => {
        await onSuccess(data);
        navigate(APP_KEYS.ROUTER_KEYS.AFTER_SING_UP);
      },
      onError: (err: AxiosError<IAuthError>) => onError(err, navigate)
    }
  );
};
