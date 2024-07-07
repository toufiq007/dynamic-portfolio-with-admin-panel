import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

class ErrorHandler extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.message = error.message || "Internal Server Error";
  error.statusCode = error.statusCode || 500;

  if (error.code === 11000) {
    const message = `Duplicate  ${Object.keys(error.keyValue)} is entered`;
    error = new ErrorHandler(message, 400);
  }

  if (error.name === "JsonWebTokenError") {
    const message = `Json web token is invalid.Try again!`;
    error = new ErrorHandler(message, 400);
  }

  if (error.name === "TokenExpiredError") {
    const message = `Json web token is expired.Try again!`;
    error = new ErrorHandler(message, 400);
  }
  if (error.name === "CastError") {
    const message = `Invalid ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  const errorMessages =
    error.errors &&
    Object.values(error.errors)
      .map((error: any) => error.message)
      .join(" ");
  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};

export default ErrorHandler;
