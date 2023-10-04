import express from 'express';
import router from "./routes";
import { sign, verify } from 'jsonwebtoken';
import cors from "cors";
import cookieParser from 'cookie-parser';
import 'dotenv/config';

const jwtExpirySeconds = 1000 * 60 * 60;
const port: number = 3000;
const app: any = express();

var corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true };

app.use(cors(corsOptions));

app.use(cookieParser());
app.use("/api", router);


app.listen(3000, () => {
  console.log(process.env.JWT_SECRET)
  console.log(`listen http://localhost:${port}`)
});