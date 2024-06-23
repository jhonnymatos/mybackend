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
	
	  async updatePsych(req: Request, res: Response) {
		const { id, name, email, password, phone, crp, state } = req.body;
	
		const existingPsych = await psychRepository.findOneBy({ id });
		if (!existingPsych) {
		  throw new BadRequestError('Psicólogo não encontrado');
		}
	
		existingPsych.name = name;
		existingPsych.email = email;
		if (password) {
		  existingPsych.password = await bcrypt.hash(password, 10);
		}
		existingPsych.phone = phone;
		existingPsych.crp = crp;
		existingPsych.state = state;
	
		await psychRepository.save(existingPsych);
	
		const { password: _, ...updatedPsych } = existingPsych;
		return res.json(updatedPsych);
	  }
	
	  async deletePsych(req: Request, res: Response) {
		const psychId = parseInt(req.params.id);
	
		const existingPsych = await psychRepository.findOneBy({ id: psychId });
		if (!existingPsych) {
		  throw new BadRequestError('Psicólogo não encontrado');
		}
	
		await psychRepository.remove(existingPsych);
		return res.status(200).json({ message: 'Psicólogo excluído com sucesso' });
	  }
	
	  async getPsychById(req: Request, res: Response) {
		const psychId = parseInt(req.params.id);
	
		const psych = await psychRepository.findOneBy({ id: psychId });
		if (!psych) {
		  throw new BadRequestError('Psicólogo não encontrado');
		}
		return res.json(psych);
	  }
	
	  async getAllPsychs(req: Request, res: Response) {
		const psychs = await psychRepository.find();
		return res.json(psychs);
	  }
	
	  async findPsychByEmail(req: Request, res: Response) {
		const { email } = req.params;
	
		const psych = await psychRepository.findOneBy({ email });
		if (!psych) {
		  throw new BadRequestError('Psicólogo não encontrado');
		}
		return res.json(psych);
	  }
}