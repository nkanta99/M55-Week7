require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model");

const connection = require("./db/connection");

const app = express();

app.use(express.json());

connection();


//  Book model ends===========

// getAllBooks
app.get("/books/getAllBooks", (request, response) => {});

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

  response.send(successResponse);
});

//update a book's author by title
app.put("/books", (request, response) => {});

// delete a book by title
app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
