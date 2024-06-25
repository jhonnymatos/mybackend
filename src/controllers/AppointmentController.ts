import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Appointment } from '../entities/Appointment'
import { User } from '../entities/User'
import { Psych } from '../entities/Psych'

export class AppointmentController {
    async create(request: Request, response: Response): Promise<Response> {
        const { userId, psychId, name, email, phone, reason } = request.body;

        const userRepository = AppDataSource.getRepository(User);
        const psychRepository = AppDataSource.getRepository(Psych);
        const appointmentRepository = AppDataSource.getRepository(Appointment);

        try {
            const user = await userRepository.findOneBy({ id: userId });
            const psych = await psychRepository.findOneBy({ id: psychId });

            if (!user || !psych) {
                return response.status(404).json({ message: 'User or Psych not found' });
            }

            const appointment = new Appointment();
            appointment.name = name;
            appointment.email = email;
            appointment.phone = phone;
            appointment.reason = reason;
            appointment.status = 'pending';
            appointment.user = user;
            appointment.psych = psych;

            await appointmentRepository.save(appointment);

            return response.status(201).json(appointment);
        } catch (error) {
            return response.status(500).json({ message: 'Error creating appointment', error });
        }
    }

    async approve(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const appointmentRepository = AppDataSource.getRepository(Appointment);

        try {
            const appointment = await appointmentRepository.findOneBy({ id: parseInt(id) });

            if (!appointment) {
                return response.status(404).json({ message: 'Appointment not found' });
            }

            appointment.status = 'approved';

            await appointmentRepository.save(appointment);

            return response.status(200).json(appointment);
        } catch (error) {
            return response.status(500).json({ message: 'Error approving appointment', error });
        }
    }

    async reject(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const appointmentRepository = AppDataSource.getRepository(Appointment);

        try {
            const appointment = await appointmentRepository.findOneBy({ id: parseInt(id) });

            if (!appointment) {
                return response.status(404).json({ message: 'Appointment not found' });
            }

            appointment.status = 'rejected';

            await appointmentRepository.save(appointment);

            return response.status(200).json(appointment);
        } catch (error) {
            return response.status(500).json({ message: 'Error rejecting appointment', error });
        }
    }

    async getPsychAppointments(request: Request, response: Response): Promise<Response> {
        const { psychId } = request.params;
        const appointmentRepository = AppDataSource.getRepository(Appointment);

        try {
            const appointments = await appointmentRepository.find({ where: { psych: { id: parseInt(psychId) } } });
            return response.status(200).json(appointments);
        } catch (error) {
            return response.status(500).json({ message: 'Error fetching appointments', error });
        }
    }
}