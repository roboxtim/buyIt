import { IUser } from './model';
import users from './schema';

export default class UserService {

    public createUser(user_params: IUser, callback: any) {
        const _session = new users(user_params);
        _session.save(callback);
    }

    public filterUser(query: any, callback: any) {
        return users.findOne(query, callback);
    }

}