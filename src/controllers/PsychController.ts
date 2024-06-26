import { Request, Response } from 'express'
import { psychRepository } from '../repositories/psychRepository'
import { BadRequestError } from '../helpers/api-errors'
import { AppDataSource } from '../data-source'
import { Psych } from '../entities/Psych'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class PsychController {
	async create(req: Request, res: Response) {
		const { name, email, password, phone, crp, state } = req.body

		console.log(name, email, password, phone, crp, state)

        const psychExists = await psychRepository.findOneBy({ email })

        if (psychExists) {
			throw new BadRequestError('E-mail já existe')
		}

        const hashPassword = await bcrypt.hash(password, 10)

        const newPsych = psychRepository.create({
			name,
			email,
			password: hashPassword,
         	phone,
         	crp,
         	state
		})

        await psychRepository.save(newPsych)

        const { password: _, ...psych } = newPsych

        return res.status(201).json(psych)
    }

    async login(req: Request, res: Response) {
		const { email, password } = req.body

        const psych = await psychRepository.findOneBy({ email })

        if (!psych) {
			throw new BadRequestError('E-mail ou senha inválidos')
		}

        const verifyPass = await bcrypt.compare(password, psych.password)

        if (!verifyPass) {
			throw new BadRequestError('E-mail ou senha inválidos')
		}

        const token = jwt.sign({ id: psych.id }, process.env.JWT_PASS ?? '', {
			expiresIn: '8h',
		})
        
        const { password: _, ...psychLogin } = psych

		return res.json({
			psych: psychLogin,
			token: token,
		})
    }

    async getProfile(req: Request, res: Response) {
		return res.json(req.psych)
	}

	async updatePsych(req: Request, res: Response) {
		const { id } = req.psych;
		const { name, email, phone, crp, state } = req.body;
	
		try {
		  const psychRepository = AppDataSource.getRepository(Psych);
		  const psych = await psychRepository.findOneBy({ id });
		  if (!psych) {
			return res.status(404).send({ error: 'Psych nao encontrado' });
		  }
	
		  psych.name = name ?? psych.name;
		  psych.email = email ?? psych.email;
		  psych.phone = phone ?? psych.phone;
		  psych.crp = crp ?? psych.crp;
		  psych.state = state ?? psych.state;
	
		  await psychRepository.save(psych);
		  res.send(psych);
		} catch (error) {
		  res.status(500).send({ error: 'Error updating psych' });
		}
	  }
	
	  async deletePsych(req: Request, res: Response) {
		const { id } = req.psych;
	
		try {
		  const psychRepository = AppDataSource.getRepository(Psych);
		  await psychRepository.delete({ id });
		  res.send({ message: 'Psych excluído com sucesso' });
		} catch (error) {
		  res.status(500).send({ error: 'Error deleting psych' });
		}
	  }
}