class UserController {
  static async getUser(req, res, next) {
    try {
    } catch (error) {
      console.error("Error en UserController.getUser: ", error.message);

      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
    } catch (error) {
      console.error("Error en UserController.createUser: ", error.message);

      next(error);
    }
  }
}

export default UserController;
