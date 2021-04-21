import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'quotes',
  timestamps: false,
})
export class Quote extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  author: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  text: string;
  @Column
  source: string;
  @Column({
    type: DataType.ARRAY(DataType.TEXT),
  })
  tags: string[];
  @Column({
    field: 'createdby',
  })
  createdBy: string;
  @Column({
    field: 'createdat',
  })
  createdAt: string;
  @Column({
    field: 'updatedat',
    type: DataType.STRING,
  })
  updatedAt: string;
  @Column({
    field: 'isdeleted',
  })
  isDeleted: boolean;
}
