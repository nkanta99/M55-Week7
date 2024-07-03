const Book = require("./model");

const getAllBooks = async (request, response) => {
    // step 1: db interaction

    const books = await Book.find({});

    const successResponse = {
        message: "success",
        books: books,
    };

    response.send(successResponse);
};

module.exports = {
    getAllBooks: getAllBooks,
};