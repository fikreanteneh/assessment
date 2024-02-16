const ErrorMiddlware = (error, req, res, next) => {
  return res.status(500).json({
    error: error.message,
  });
};

export default ErrorMiddlware;
