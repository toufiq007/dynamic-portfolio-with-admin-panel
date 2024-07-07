export interface IMessage extends Document {
  senderName: string;
  message: string;
  subject: string;
  createdAt?: Date;
  updatedAt?: Date;
}
