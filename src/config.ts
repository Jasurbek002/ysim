import dotenv from "dotenv";
dotenv.config();

const dbConfig:any = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_BASE,
  port:8090
};


const API_URL = process.env.API;
export { API_URL, dbConfig };
