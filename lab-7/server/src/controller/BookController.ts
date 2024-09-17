import { Request, Response, NextFunction } from "express";

import Book from "../model/Book";

export const save = ((req:Request,res: Response,next:NextFunction) => {
    const{title, isbn, publisherDate, author} = req.body;
    const newBook = new Book(undefined, title, isbn, publisherDate, author).save();
    //newBook.save();
    res.status(201).json(newBook);
});

export const getAllBooks = ((req:Request,res: Response) => {
    res.status(200).json(Book.getAllBooks());
});


export const updateBookById = ((req:Request,res: Response) => {
    const { title, isbn, publisherDate, author } = req.body;
    const updatedBook = new Book(req.params.id, title, isbn, publisherDate, author).update();
    res.status(204).end();
});

export const deleteBookById = ((req:Request,res: Response) => {
    res.status(204).json(Book.deleteBookById(req.params.bookId));
});