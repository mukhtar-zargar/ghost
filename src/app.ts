import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use("*", cors());

app.get("/", (req, res) => {
  res.json({
    author: "mukhtar",
    project: "ghost",
    description:
      "Test and implement - GraphQL/Apollo/Express/Typescript/MongoDb"
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
