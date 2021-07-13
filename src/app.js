import app from "./";
import { db } from "./config/connections";

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  db,
  () =>
    process.env.NODE_ENV === "development" &&
    console.log(`Listening on port ${PORT}`)
);
