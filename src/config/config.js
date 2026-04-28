export const SERVER_PORT = process.env.SERVER_PORT ?? 30001;
export const SERVER_HOST = `http://localhost:${SERVER_PORT}`;

// BASE DE DATOS
export const DB = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
};
