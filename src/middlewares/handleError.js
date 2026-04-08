const handleError = (error, req, res, next) =>
  res.status(error.status ?? 500).json({
    success: false,
    message: error.message ?? "Error interno del servidor",
  });

export default handleError;
