import { AppDataSource } from '../data-source'
import { User } from '../entities/User'
import IUser from '../interfaces/IUser';

export const userRepository = AppDataSource.getRepository(User)