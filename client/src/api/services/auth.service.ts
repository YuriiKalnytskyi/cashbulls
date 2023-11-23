import {HttpFactoryService, HttpService} from '@/module/common/services';
import {ExpectedFromQuery, IToken} from '@/module/common/types';
import {ILogin, ISingUp} from '@/types';

class AuthService {
    constructor(private httpService: HttpService) {
    }

    async login(data: ILogin): Promise<ExpectedFromQuery<IToken>> {
        const a = await this.httpService.post<IToken, ILogin>('/auth/login/', data);

        console.log('++++++++++', a)

        return a
    }

    async singUp(data: ISingUp): Promise<ExpectedFromQuery<IToken>> {
        return this.httpService.post<IToken, ISingUp>('/auth/sing-up', data);
    }
}

const factory = new HttpFactoryService();
export const authService = new AuthService(factory.createHttpService());
