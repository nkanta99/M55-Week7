const Book = require("./model");

const getAllBooks = async (request, response) => {
    // step 1: db interaction

    const books = await Book.find({});
    
// step 2: create success object
    const successResponse = {
        message: "success",
        books: books,
    };

    response.send(successResponse);
};

const deleteBook = async (request, response) => {
  console.log(request.body.title);
  const book = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

const updateBook = async (request, response) => {
  console.log(request.body);
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {
  console.log(request.body);
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

module.exports = {
    getAllBooks: getAllBooks,
    deleteBook: deleteBook,
    updateBook: updateBook,
    addBook: addBook,
};