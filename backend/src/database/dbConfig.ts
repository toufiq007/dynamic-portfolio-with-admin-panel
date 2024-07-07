import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING as string, {
      dbName: "portfolio_db",
    });
    console.log("data base connected!!");
  } catch (err) {
    console.log(err);
  }
};
