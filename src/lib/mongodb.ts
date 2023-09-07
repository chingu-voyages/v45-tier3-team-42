const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

import mongoose from "mongoose";
// track the connection
let isConnected = false;
export const connectToDataBase = async () => {
  if (isConnected) {
    console.log("DB connected already");
  return;
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
      ...options
      });
      isConnected = true;
    } catch (error) {
      console.log(error);
    }
  }
};



