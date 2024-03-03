require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
