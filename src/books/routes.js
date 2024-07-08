const {Router} = require("express");
const bookRouter = Router();

const Book = require("./model");

const {getAllBooks} = require("./controller");

const {deleteBook} = require("./controller");

const {updateBook } = require("./controller");

const { addBook } = require("./controller");

// getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.post("/books/addBook", addBook);
bookRouter.put("/books/updateBook", updateBook);

bookRouter.delete("/books", deleteBook);

bookRouter.put("/books", updateBook);

bookRouter.post("/books/addBook", addBook);

module.exports = bookRouter;

    
