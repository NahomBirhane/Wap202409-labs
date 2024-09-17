import { error } from "console";
import { nanoid } from "nanoid";

let books: Book[] = [];

export default class Book {
  constructor(
    public id: string = nanoid(),
    public title: string,
    public isbn: string,
    public publisherDate: Date,
    public author: string
  ) {}

  save() {
    books.push(this);
  }

  static getAllBooks() {
    return books;
  }

  update() {
    const index = books.findIndex((b) => b.id === this.id);
    if (index > -1) {
      return (books[index] = this);
    } else {
      throw new Error(`Book with id: ${this.id} not Found`);
    }
  }


static deleteBookById(bookId: string){
    const index = books.findIndex(b => b.id === bookId);
    books.splice(index, 1);
} 
}
