import mongoose, { Document, Schema } from "mongoose";
import { IMessage } from "../interfaces";

const messageSchema: Schema = new mongoose.Schema<IMessage>(
  {
    senderName: {
      type: String,
      required: true,
      unique: true,
      minLength: [2, "Name must be contain at least 2 characters"],
    },
    subject: {
      type: String,
      required: true,
      minLength: [2, "subject must be contain at least 2 characters"],
    },
    message: {
      type: String,
      required: true,
      minLength: [2, "message must be contain at least 2 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export const messageModel = mongoose.model<IMessage>("Message", messageSchema);
