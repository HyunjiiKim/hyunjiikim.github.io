import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("TCateogry")
export class Category {
    @PrimaryGeneratedColumn("uuid") id!: string;
    @Column("varchar") name !: string;

    @CreateDateColumn() createdAt !: Date;
    @UpdateDateColumn() updatedAt !: Date;
}