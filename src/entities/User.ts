import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Evaluation } from "./Evaluation";
import { Appointment } from "./Appointment";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', unique: true})
    email: string

    @Column({type: 'text'})
    password: string

    @OneToMany(() => Evaluation, evaluation => evaluation.user)
    evaluations: Evaluation[];

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}