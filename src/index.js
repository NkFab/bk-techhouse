import express from "express";
import cors from "cors";
import routers from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routers);
app.get("/api", (_req, res) => {
  return res.status(200).json({
    data: { message: "Welcome to Simple Job Application API" },
  });
});
app.use("*", (_req, res) =>
  res.status(404).json({
    message: "API endpoint not found!",
  })
);

if (app.get("env") === "development") {
  app.use(function (err, _req, res, _next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

export default app;
