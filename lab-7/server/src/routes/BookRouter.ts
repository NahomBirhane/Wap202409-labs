import { Router } from "express";
import * as BookController from '../controller/BookController'
export const BookRouter = Router();

BookRouter.post('/books', BookController.save);
BookRouter.get('/books', BookController.getAllBooks);
BookRouter.put('/books/:id', BookController.updateBookById);
BookRouter.delete('/books/:id', BookController.deleteBookById);

