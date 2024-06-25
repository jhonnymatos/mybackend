import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'
import { BadRequestError } from '../helpers/api-errors'
import { AppDataSource } from '../data-source'
import { User } from '../entities/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
    const { id } = req.user;
    const { name, email } = req.body;

    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOneBy({ id });
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }

      user.name = name ?? user.name;
      user.email = email ?? user.email;

      await userRepository.save(user);
      res.send(user);
    } catch (error) {
      res.status(500).send({ error: 'Error updating user' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.user;

    try {
      const userRepository = AppDataSource.getRepository(User);
      await userRepository.delete({ id });
      res.send({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Error deleting user' });
    }
  }
}