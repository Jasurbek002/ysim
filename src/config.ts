import dotenv from "dotenv";
dotenv.config();

const dbConfig: any = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_BASE,
  port: 8090,
};

const API_NOTIFY = process.env.API_NOTFIY;
const API_REGISTER = process.env.API_REGISTER;

export { API_NOTIFY, API_REGISTER, dbConfig };
