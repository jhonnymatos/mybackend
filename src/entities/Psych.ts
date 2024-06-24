import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evaluation } from "./Evaluation";
import { Appointment } from "./Appointment";

@Entity('psychs')
export class Psych {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', unique: true})
    email: string

    @Column({type: 'text'})
    password: string

    @Column({type: 'text'})
    phone: number

    @Column({type: 'text'})
    crp: number

    @Column({type: 'text'})
    state: string

    @OneToMany(() => Evaluation, evaluation => evaluation.psych)
    evaluation: Evaluation[]

    @OneToMany(() => Appointment, appointment => appointment.psych)
    appointments: Appointment[];
}