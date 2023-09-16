import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45 })
  name: string;
  @Column({ length: 45, unique: true })
  email: string;
  @Column({ type: "boolean", default: false })
  admin: boolean;
  @Column({ length: 120 })
  password: string;
  @CreateDateColumn({ type: "date" })
  createdAt: string;
  @UpdateDateColumn({ type: "date" })
  updateAt: string;
  @DeleteDateColumn({ type: "date" })
  deleteAt: string | null;
}
