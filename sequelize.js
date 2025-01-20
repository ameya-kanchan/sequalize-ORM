import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'mydatabase',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'new_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  }
);

sequelize.authenticate()
  .then(() => console.log('Sequelize connected to MySQL successfully'))
  .catch((err) => console.error('Error connecting Sequelize to MySQL:', err));

export default sequelize;
