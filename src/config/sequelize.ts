import { Sequelize } from 'sequelize';
import config from './config';

// Create a new Sequelize instance using the configuration
const sequelize = new Sequelize(
  config.development.database!,
  config.development.username!,
  config.development.password!,
  {
    host: config.development.host,
    dialect: 'postgres',
    logging: false, 
  }
);

export default sequelize;
