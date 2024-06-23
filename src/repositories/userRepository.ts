import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

export const userRepository = AppDataSource.getRepository(User);

interface IUserRepo {
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(userId: number): Promise<void>;
  getById(userId: number): Promise<User>;
  getAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
}

export class UserRepository implements IUserRepo {
  async save(user: User): Promise<void> {
    try {
      await userRepository.save(user);
    } catch (error) {
      throw new Error("Falha ao criar usuário!");
    }
  }

  async update(user: User): Promise<void> {
    try {
      const existingUser = await userRepository.findOneBy({ id: user.id });
      if (!existingUser) {
        throw new Error("Usuário não encontrado");
      }

      existingUser.name = user.name;
      existingUser.password = user.password;
      existingUser.email = user.email;

      await userRepository.save(existingUser);
    } catch (error) {
      throw new Error("Falha ao atualizar usuário!");
    }
  }

  async delete(userId: number): Promise<void> {
    try {
      const existingUser = await userRepository.findOneBy({ id: userId });
      if (!existingUser) {
        throw new Error("Usuário não encontrado");
      }

      await userRepository.remove(existingUser);
    } catch (error) {
      throw new Error("Falha ao excluir usuário!");
    }
  }

  async getById(userId: number): Promise<User> {
    try {
      const user = await userRepository.findOneBy({ id: userId });
      if (!user) {
        throw new Error("Usuário não encontrado!");
      }
      return user;
    } catch (error) {
      throw new Error("Falha ao buscar usuário por ID!");
    }
  }

  async getAll(): Promise<User[]> {
    try {
      return await userRepository.find();
    } catch (error) {
      throw new Error("Falha ao acessar todos os dados!");
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await userRepository.findOneBy({ email });
      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error("Falha ao buscar usuário por e-mail!");
    }
  }
}