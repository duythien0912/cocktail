import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bluebird from "bluebird";
import collections from "./routes/collections";
import cocktails from "./routes/cocktails";
import ingredients from "./routes/ingredients";
import tags from "./routes/tags";
import users from "./routes/users";
import auth from "./routes/auth";

dotenv.config();
const app = express();
const router = express.Router();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const mongoDB = "mongodb://thien:thien@ds223509.mlab.com:23509/cocktail";
mongoose.connect(mongoDB);
mongoose.Promise = bluebird;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api/", auth);
app.use("/api/", collections);
app.use("/api/", cocktails);
app.use("/api/", ingredients);
app.use("/api/", tags);
app.use("/api/", users);

app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Ready to go on ${port}`);
});
