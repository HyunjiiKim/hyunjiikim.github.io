import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Post {
    @PrimaryGeneratedColumn("uuid") id!: string;
    @Column() title!: string;
    @Column("text") content!: string;
    @Column("uuid") category!: string;
    @CreateDateColumn() createdAt!: Date;
    @UpdateDateColumn() updatedAT!: Date;
}
