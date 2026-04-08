const handleError404 = (req, res, next) => {
  const error = new Error("Error 404 - Ruta no encontrada");
  error.status = 404;

  next(error);
};

export default handleError404;
