import { connect } from "mongoose";
import env from "dotenv";
env.config();

export const dbConfig = async () => {
  try {
    await connect(process.env.URL as string).then(() => {
      console.log("connected ❤️❤️🚀🚀");
    });
  } catch (error) {
    console.log(error);
  }
};
