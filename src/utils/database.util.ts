import mongoose from "mongoose";
import config from "config";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("Connected");
  } catch (err) {
    console.log(err, "Eror");
  }
};

export default connect;
