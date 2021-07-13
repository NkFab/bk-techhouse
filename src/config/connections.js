import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.URL || "mongodb://localhost/NODE_APP";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", () => {
  console.error.bind("Error in db connection");
});

db.on("open", () => {
  console.log("Connection established");
});

export { db };
