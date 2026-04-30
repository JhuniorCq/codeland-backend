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
}

export default ProgressController;
