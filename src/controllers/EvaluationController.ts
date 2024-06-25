import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Evaluation } from '../entities/Evaluation'
import { User } from '../entities/User'
import { Psych } from '../entities/Psych'

export class EvaluationController {
    async create(req: Request, res: Response): Promise<Response> {
        const { userId, psychId, rating, comment } = req.body;

        try {
            const evaluationRepository = AppDataSource.getRepository(Evaluation);
            const userRepository = AppDataSource.getRepository(User);
            const psychRepository = AppDataSource.getRepository(Psych);

            console.log('Fetching user and psych data');
            const user = await userRepository.findOne({ where: { id: userId } });
            const psych = await psychRepository.findOne({ where: { id: psychId } });

            if (!user) {
                console.error(`User with ID ${userId} not found`);
                return res.status(404).json({ message: 'User not found' });
            }
            if (!psych) {
                console.error(`Psych with ID ${psychId} not found`);
                return res.status(404).json({ message: 'Psych not found' });
            }

            const evaluation = new Evaluation();
            evaluation.user = user;
            evaluation.psych = psych;
            evaluation.rating = rating;
            evaluation.comment = comment;
            evaluation.date = new Date();

            console.log('Saving evaluation');
            await evaluationRepository.save(evaluation);

            return res.status(201).json(evaluation);
        } catch (error) {
            console.error('Error saving evaluation', error);
            return res.status(500).json({ message: 'Internal server error', error });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        const { psychologistId } = req.params;

        try {
            const evaluationRepository = AppDataSource.getRepository(Evaluation);

            console.log(`Fetching evaluations for psychologist ID ${psychologistId}`);
            const evaluations = await evaluationRepository.find({
                where: { psych: { id: Number(psychologistId) } },
                relations: ['user']
            });

            const response = evaluations.map(evaluation => ({
                rating: evaluation.rating,
                comment: evaluation.comment,
                date: evaluation.date,
                user: evaluation.user.name
            }));

            return res.status(200).json(response);
        } catch (error) {
            console.error('Error fetching evaluations', error);
            return res.status(500).json({ message: 'Internal server error', error });
        }
    }
}