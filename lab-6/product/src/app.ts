import express, { Request, Response, NextFunction } from "express";
import productRoutes from "./routes/products";

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send("<h3>404 - Page Not Found</h3>");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is Listenning on Port => ${PORT}`);
});
