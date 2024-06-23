import { Repository } from 'typeorm';
import { Appointment } from '../entities/Appointment';

export class AppointmentRepository {
  private readonly repository: Repository<Appointment>;

  constructor(repository: Repository<Appointment>) {
    this.repository = repository;
  }

  async save(appointment: Appointment): Promise<Appointment> {
    return this.repository.save(appointment);
  }

  async find(psych_Id: string, status: string): Promise<Appointment[]> {
    return this.repository.find({ where: { psych_Id, status } });
  }

  async findById(id: number): Promise<Appointment | null> {
    return this.repository.findOne({ where: { id } });
  }
}