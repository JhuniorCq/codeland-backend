import pool from "../config/db.js";

class UserModel {
  static async getUser({ uid }) {
    try {
      // Verificar si el usuario existe
      const [userData] = await pool.query(
        "SELECT * FROM player WHERE id_player = ?",
        [uid],
      );

      if (userData.length === 0) {
        throw new Error("El usuario no existe");
      }

      const { id_player, username, email } = userData[0];

      return {
        uid: id_player,
        username: username,
        email: email,
      };
    } catch (error) {
      console.error("Error en UserModel.getUser: ", error.message);
      throw error;
    }
  }

  static async createUser({ username, email, password, uid }) {
    try {
      // Verificar si el usuario ya existe
      const [user] = await pool.query(
        "SELECT email FROM player WHERE email = ? OR id_player = ?",
        [email, uid],
      );

      if (user.length > 0) {
        throw new Error("Este usuario ya existe");
      }

      const [userInsert] = await pool.query(
        "INSERT INTO player (id_player, username, email, password) VALUES (?, ?, ?, ?)",
        [uid, username, email, password],
      );

      if (userInsert.affectedRows === 0) {
        throw new Error("No se pudo crear el usuario");
      }

      return {
        uid,
        username,
        email,
      };
    } catch (error) {
      console.error("Error en UserModel.createUser: ", error.message);
      throw error;
    }
  }
}

export default UserModel;
