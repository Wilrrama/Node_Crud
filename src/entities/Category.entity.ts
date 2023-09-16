import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45, unique: true })
  name: string;
  @CreateDateColumn({ type: "date" })
  createdAt: string;
  @UpdateDateColumn({ type: "date" })
  updateAt: string;
  @DeleteDateColumn({ type: "date" })
  deleteAt: string | null;
}
