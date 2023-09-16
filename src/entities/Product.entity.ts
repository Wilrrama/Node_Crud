import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45, unique: true })
  name: string;
  @Column({ type: "text", nullable: true })
  description?: string | undefined | null;
  @Column({ default: 1 })
  stock: number;
  @Column()
  price: number;
  @CreateDateColumn({ type: "date" })
  createdAt: string;
  @UpdateDateColumn({ type: "date" })
  updateAt: string;
  @DeleteDateColumn({ type: "date" })
  deleteAt: string | null;
}
