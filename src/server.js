require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

// addBook
app.post("/books/addBook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

 const successResponse = {
    message: "success",
    book: book,
  };

  response.end(successResponse);
});

//update a book's author by title
app.put("/books", async (request, response) => {
  console.log (request.body.title)
  const book = await Book.updateOne({title: request.body.title}, {author: request.body.author})

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

// delete a book by title
app.delete("/books", async (request, response) => {
  console.log (request.body.title)
  const book = await Book.deleteOne({title: request.body.title})

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
