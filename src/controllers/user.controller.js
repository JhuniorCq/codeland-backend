import UserModel from "../models/user.model.js";

class UserController {
  static async getUser(req, res, next) {
    try {
      const { uid } = req.params;

      const userData = await UserModel.getUser({ uid });

      res.json({
        success: true,
        message: "Usuario obtenido exitosamente",
        data: userData,
      });
    } catch (error) {
      console.error("Error en UserController.getUser: ", error.message);

      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const { username, email, password } = req.body;

      // Validar datos con Zod

      // Crear un UID único para el usuario
      const uid = crypto.randomUUID();

      // Encriptar la contraseña con bcrypt

      const userData = await UserModel.createUser({
        username,
        email,
        password,
        uid,
      });

      res.json({
        success: true,
        message: "Usuario creado exitosamente",
        data: userData,
      });
    } catch (error) {
      console.error("Error en UserController.createUser: ", error.message);

      next(error);
    }
  }
}

export default UserController;
