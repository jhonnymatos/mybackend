import { Request, Response } from 'express';
import { AppointmentRepository } from '../repositories/appointmentRepository';
import { Appointment } from '../entities/Appointment';

export class AppointmentController {
  private appointmentRepository: AppointmentRepository;

  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  // Criação de Consulta
  public createAppointment = async (req: Request, res: Response): Promise<void> => {
    const { name, email, phone, reason } = req.body;
    const appointment = new Appointment({ name, email, phone, reason, status: 'pendente' });
    await this.appointmentRepository.save(appointment);
    res.status(201).send({ message: 'Consulta criada com sucesso!' });
  };

  // Listagem de Consultas
  public listAppointments = async (req: Request, res: Response): Promise<void> => {
    const psych_id = req.query.psych_id as string;
    const appointments = await this.appointmentRepository.find(psych_id, 'pendente');
    res.send(appointments);
  };

  // Visualização de Consulta
  public getAppointment = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const appointment = await this.appointmentRepository.findById(id);
    if (!appointment) {
      res.status(404).send({ message: 'Consulta não encontrada!' });
    } else {
      res.send(appointment);
    }
  };

  // Atualização de Status
  public updateAppointmentStatus = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body;
    const appointment = await this.appointmentRepository.findById(id);
    if (!appointment) {
      res.status(404).send({ message: 'Consulta não encontrada!' });
    } else {
      appointment.status = status;
      await this.appointmentRepository.save(appointment);
      res.send({ message: `Status da consulta atualizado para ${status}!` });
    }
  };
}


/*import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Appointment } from '../entities/Appointment';

export class AppointmentController {

  // Criação de Consulta
  public createAppointment = async (req: Request, res: Response): Promise<void> => {
    const { name, email, phone, reason } = req.body;
    const appointmentRepository = getRepository(Appointment);
    const appointment = appointmentRepository.create({ name, email, phone, reason, status: 'pendente' });
    await appointmentRepository.save(appointment);
    res.status(201).send({ message: 'Consulta criada com sucesso!' });
  };

  // Listagem de Consultas
  public listAppointments = async (req: Request, res: Response): Promise<void> => {
    const psych_id = req.query.psych_id as string;
    const appointmentRepository = getRepository(Appointment);
    const query = appointmentRepository.createQueryBuilder('appointment');

    if (psych_id) {
      query.andWhere('appointment.psych_id = :psych_id', { psych_id });
    }

    query.andWhere('appointment.status = :status', { status: 'pendente' });

    const appointments = await query.getMany();
    res.send(appointments);
  };

  // Visualização de Consulta
  public getAppointment = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const appointmentRepository = getRepository(Appointment);
    const appointment = await appointmentRepository.findOne(id);
    if (!appointment) {
      res.status(404).send({ message: 'Consulta não encontrada!' });
    } else {
      res.send(appointment);
    }
  };

  // Atualização de Status
  public updateAppointmentStatus = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body;
    const appointmentRepository = getRepository(Appointment);
    const appointment = await appointmentRepository.findOne(id);
    if (!appointment) {
      res.status(404).send({ message: 'Consulta não encontrada!' });
    } else {
      appointment.status = status;
      await appointmentRepository.save(appointment);
      res.send({ message: `Status da consulta atualizado para ${status}!` });
    }
  };
}*/

