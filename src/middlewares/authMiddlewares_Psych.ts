import { NextFunction, Request, Response  } from 'express'
import { UnauthorizedError } from '../helpers/api-errors'
import { psychRepository } from '../repositories/psychRepository'
import jwt from 'jsonwebtoken'

type JwtPayload = {
	id: number
}

export const authMiddlewarePsych = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {authorization} = req.headers;

		if(!authorization) {
			throw new UnauthorizedError('Nao Autorizado')
		}

		const token = authorization.split(' ')[1];

		const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

		const psych = await psychRepository.findOneBy({ id });

        if (!psych) {
			throw new UnauthorizedError('E-mail ou senha inválidos')
		}

		const { password: _,...loggedPsych } = psych;

        req.psych = loggedPsych;

        next()
    }