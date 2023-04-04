import mongoose from "mongoose";

const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.log("ERROR", error);
  }
};

export default connectDB;
