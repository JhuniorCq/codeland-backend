class UserModel {
  static async getUser({ uid }) {
    try {
    } catch (error) {
      console.error("Error en UserModel.getUser: ", error.message);
      throw error;
    }
  }

  static async createUser({ name, email }) {
    try {
    } catch (error) {
      console.error("Error en UserModel.createUser: ", error.message);
      throw error;
    }
  }
}

export default UserModel;
