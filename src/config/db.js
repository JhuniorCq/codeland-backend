import mysql2 from "mysql2/promise";
import { DB } from "./config.js";

const pool = mysql2.createPool({
  host: DB.host,
  user: DB.user,
  password: DB.password,
  database: DB.database,
  port: DB.port,
  decimalNumbers: true,
  connectionLimit: 10,
});

const verifyConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión a la base de datos establecida correctamente.");
    connection.release();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
};

verifyConnection();

export default pool;
