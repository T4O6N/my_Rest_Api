require("dotenv").config();
const port = process.env.PORT || 3000;

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log({ message: err.message });
  });

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const userRouter = require('./userRouter'); 
app.get("/users", userRouter);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
