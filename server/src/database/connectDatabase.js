import mongoose from "mongoose";

// Function to connect MongoDB database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Server is connected successfully to MongoDB database.");
  } catch (error) {
    console.log("Error while connecting MongoDB database:", error.message);
  };
};

export default connectDatabase;