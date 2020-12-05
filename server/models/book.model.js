const { Schema, model} = require("mongoose");

const bookSchema = new Schema(
  {
    bookName: {
      type: String,
      required: [true, "bookname is required"]
    }, 
    bookContent: String,
    bookPath1: Number,
    bookPath2: Number,
  },
);

module.exports = model("book", bookSchema);