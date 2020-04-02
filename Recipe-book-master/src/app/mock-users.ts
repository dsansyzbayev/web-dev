import { User } from './user';
import { List } from './list'

export var logedin: boolean = false;

export const mockUser: User = {
    id: 0,
    login: 'daniyar',
    password: '1q2w3e4r',
    name: 'dan',
    last_name: 'sansyzbayev',
    email: 'daniar004@gmail.com',
    saved_recipes: [List[0], List[1], List[3],],
    user_recipes: [],
}