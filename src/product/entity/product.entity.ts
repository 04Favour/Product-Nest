/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'product'})
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    brand: string;
    @Column()
    price: number;
    @CreateDateColumn()
    createdDate: Date
}