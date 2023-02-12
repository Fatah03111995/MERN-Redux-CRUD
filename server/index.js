import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routers/product.js';

const app = express();

dotenv.config();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());
app.use(express.json());

app.use('/product', productRouter);

const port = process.env.PORT;
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(
      port,
      console.log(
        `mongoose connected, and server is listnening from port : ${port}`
      )
    )
  )
  .catch((e) => {
    console.log(e);
  });
