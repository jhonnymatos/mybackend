import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Appointment } from '../entities/Appointment';

export class AppointmentController {
  private dataSource: AppDataSource; // Declarar dataSource como tipo AppDataSource

  constructor(dataSource: AppDataSource) {
    this.dataSource = dataSource; // Inicializar o dataSource com um serviço de DataSource adequado
  }

  // Criação de Consulta
  public createAppointment = async (req: Request, res: Response): Promise<void> => {
    const { name, email, phone, reason, psychId, userId } = req.body;
    const appointmentRepository = this.dataSource.getRepository(Appointment);
    const appointment = appointmentRepository.create({ name, email, phone, reason, status: 'pendente', psych: { id: psychId }, user: { id: userId } });
    await appointmentRepository.save(appointment);
    res.status(201).send({ message: 'Consulta criada com sucesso!' });
  };

  // Listagem de Consultas
  public listAppointments = async (req: Request, res: Response): Promise<void> => {
    const psychId = req.query.psych_id as string;
    const appointmentRepository = this.dataSource.getRepository(Appointment);
    const query = appointmentRepository.createQueryBuilder('appointment');

    if (psychId) {
      query.andWhere('appointment.psych_id = :psych_id', { psych_id: psychId });
    }

    query.andWhere('appointment.status = :status', { status: 'pendente' });

    const appointments = await query.getMany();
    res.send(appointments);
  };

  // Visualização de Consulta
  public getAppointment = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const appointmentRepository = this.dataSource.getRepository(Appointment);
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
    const appointmentRepository = this.dataSource.getRepository(Appointment);
    const appointment = await appointmentRepository.findOne(id);
    if (!appointment) {
      res.status(404).send({ message: 'Consulta não encontrada!' });
    } else {
      appointment.status = status;
      await appointmentRepository.save(appointment);
      res.send({ message: `Status da consulta atualizado para ${status}!` });
    }
  };
}