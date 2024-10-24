import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class Order extends Model {
  public id!: number;
  public totalAmount!: number;
  public status!: string;
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  totalAmount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
}, {
  sequelize,
  modelName: 'Order',
});

export default Order;
