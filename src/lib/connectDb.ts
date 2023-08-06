import { connect } from "mongoose";

const { NEXT_PUBLIC_MONGODB_URI } = process.env;

if (!NEXT_PUBLIC_MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export const connectDb = async () => {
  try {
    const { connection } = await connect(NEXT_PUBLIC_MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("Connected to MongoDB");
      return Promise.resolve();
    }
  } catch (error) {
    console.log("Error connecting to MongoDB");
    return Promise.reject();
  }
};
