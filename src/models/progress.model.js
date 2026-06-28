import pool from "../config/db.js";

class ProgressModel {
  static async saveProgress({ uid, progressData }) {
    try {
      const { idLevel, completed } = progressData;

      // Verificar si el usuario existe
      const [userData] = await pool.query(
        "SELECT * FROM player WHERE id_player = ?",
        [uid],
      );

      if (userData.length === 0) {
        throw new Error("El usuario no existe");
      }

      // Verificar si el nivel existe
      const [levelData] = await pool.query(
        "SELECT * FROM level WHERE id_level = ?",
        [idLevel],
      );

      if (levelData.length === 0) {
        throw new Error("El nivel no existe");
      }

      // Si el progreso ya existe, se actualiza. Si no, se inserta un nuevo registro.
      const query = `
        INSERT INTO progress (id_player, id_level, completed, attempts)
        VALUES (?, ?, ?, 1)
        ON DUPLICATE KEY UPDATE
          attempts = IF(completed = 0, attempts + 1, attempts),
          completed = IF(completed = 1, 1, VALUES(completed))
      `;

      const values = [uid, idLevel, completed];

      const [progressInsert] = await pool.query(query, values);

      if (progressInsert.affectedRows === 0) {
        throw new Error("No se pudo guardar el progreso");
      }

      return "Progreso guardado exitosamente";
    } catch (error) {
      console.error("Error en ProgressModel.saveProgress: ", error.message);

      throw error;
    }
  }

  // TODO: Verificar esto
  static async getProgress({ uid, idLevel }) {
    try {
      const [progressSelect] = await pool.query(
        "SELECT * FROM progress WHERE id_player = ? AND id_level = ?",
        [uid, idLevel],
      );

      if (progressSelect.length === 0) {
        return null; // No hay progreso registrado para este usuario y nivel
      }

      const { id_player, id_level, completed, attempts, date_last_play } =
        progressSelect[0];

      return {
        idPlayer: id_player,
        idLevel: id_level,
        completed: completed,
        attempts: attempts,
        dateLastPlay: date_last_play,
      }; // Se devuelve el progreso del usuario para el nivel específico
    } catch (error) {
      console.error("Error en ProgressModel.getProgress: ", error.message);
      throw error;
    }
  }
}

export default ProgressModel;

/*
  DATOS A ENVIAR PARA GUARDAR EL PROGRESO:
  {
    "uid": "user-123",
    "progressData": {
      "idLevel": 3,
      "completed": false,
      "dateLastPlay": "2024-06-01T12:00:00Z"   
    }
  }
*/
