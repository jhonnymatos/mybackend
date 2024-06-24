import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Evaluation } from "./Evaluation";

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
}