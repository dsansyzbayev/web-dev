import { User } from './user';
import { List } from './list';

export const mockUser: User = {
  id: 0,
  login: 'daniyar',
  password: '1q2w3e4r',
  name: 'dan',
  last_name: 'sansyzbayev',
  email: 'daniar004@gmail.com',
  image: '../../assets/1_0.jpg',
  saved_recipes: [List[0], List[1], List[3]],
  user_recipes: [],
};
