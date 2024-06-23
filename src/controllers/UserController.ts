import { Request, Response } from 'express';
import { userRepository } from '../repositories/UserRepository';
import { BadRequestError } from '../helpers/api-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userExists = await userRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestError('E-mail já existe');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestError('E-mail ou senha inválidos');
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      throw new BadRequestError('E-mail ou senha inválidos');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
      expiresIn: '8h',
    });

    const { password: _, ...userLogin } = user;

    return res.json({
      user: userLogin,
      token: token,
    });
  }

  async getProfile(req: Request, res: Response) {
    return res.json(req.user);
  }

  async updateUser(req: Request, res: Response) {
    const { id, name, email, password } = req.body;

    const existingUser = await userRepository.findOneBy({ id });
    if (!existingUser) {
      throw new BadRequestError('Usuário não encontrado');
    }

    existingUser.name = name;
    existingUser.email = email;
    if (password) {
      existingUser.password = await bcrypt.hash(password, 10);
    }

    await userRepository.save(existingUser);

    const { password: _, ...updatedUser } = existingUser;
    return res.json(updatedUser);
  }

  async deleteUser(req: Request, res: Response) {
    const userId = parseInt(req.params.id);

    const existingUser = await userRepository.findOneBy({ id: userId });
    if (!existingUser) {
      throw new BadRequestError('Usuário não encontrado');
    }

    await userRepository.remove(existingUser);
    return res.status(200).json({ message: 'Usuário excluído com sucesso' });
  }

  async getUserById(req: Request, res: Response) {
    const userId = parseInt(req.params.id);

    const user = await userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestError('Usuário não encontrado');
    }
    return res.json(user);
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await userRepository.find();
    return res.json(users);
  }

  async findUserByEmail(req: Request, res: Response) {
    const { email } = req.params;

    const user = await userRepository.findOneBy({ email });
    if (!user) {
      throw new BadRequestError('Usuário não encontrado');
    }
    return res.json(user);
  }
}