import { Request, Response } from 'express';
import { psychRepository } from '../repositories/psychRepository';
import { BadRequestError } from '../helpers/api-errors';
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

	async createPsych(req: Request, res: Response) {
		const { name, email, password, phone, crp, state } = req.body;
	
		const psychExists = await psychRepository.findOneBy({ email });
	
		if (psychExists) {
		  throw new BadRequestError('E-mail já existe');
		}
	
		const hashPassword = await bcrypt.hash(password, 10);
	
		const newPsych = psychRepository.create({
		  name,
		  email,
		  password: hashPassword,
		  phone,
		  crp,
		  state,
		});
	
		await psychRepository.save(newPsych);
	
		const { password: _, ...psych } = newPsych;
	
		return res.status(201).json(psych);
	  }
}