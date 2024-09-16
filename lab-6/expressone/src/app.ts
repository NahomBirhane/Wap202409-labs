import express, { Request, Response, NextFunction } from "express";
import path from "path";
import userRouter from './routes/user';
import productRouter from './routes/product';

const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/users", userRouter);

app.use('/',(req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html')); //path.join(__dirname, 'views', 'index.html')
});

app.use((req, res, next) => {
  res.status(404).send("Page Not Found!");
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Internal server error");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port => ${PORT}`);
});
