import mongoose from "mongoose";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection successfully established");
});

mongoose.connection.on("error", (err: Error) => {
  console.error(err);
});

const dbConnect = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGO_URL as string); 
};

export default dbConnect;