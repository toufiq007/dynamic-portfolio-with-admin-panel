import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middlewares/catchAsyncMiddleware";
import ErrorHandler from "../middlewares/errorMiddleware";
import { messageModel } from "../model/messageSchema";

const sendMessage = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { senderName, subject, message } = req.body;
    if (!senderName || !subject || !message) {
      return next(new ErrorHandler("All fileds are requried!!", 400));
    }
    const data = await messageModel.create({ senderName, subject, message });
    console.log({ data }, "from the send messageController");
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
      data,
    });
  }
);

export const messageController = {
  sendMessage,
};
