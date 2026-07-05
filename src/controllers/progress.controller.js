import ProgressModel from "../models/progress.model.js";

class ProgressController {
  static async saveProgress(req, res, next) {
    try {
      const { uid, progressData } = req.body;

      const progressResult = await ProgressModel.saveProgress({
        uid,
        progressData,
      });

      res.json({
        success: true,
        message: progressResult,
      });
    } catch (error) {
      console.error(
        "Error en ProgressController.saveProgress: ",
        error.message,
      );

      next(error);
    }
  }

  static async getProgress(req, res, next) {
    try {
      const { uid } = req.params;

      const completedLevels = await ProgressModel.getCompletedLevels({ uid });

      res.json({
        success: true,
        message: "Progreso obtenido exitosamente",
        data: { completedLevels },
      });
    } catch (error) {
      console.error(
        "Error en ProgressController.getProgress: ",
        error.message,
      );

      next(error);
    }
  }
}

export default ProgressController;
