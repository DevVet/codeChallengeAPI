const mongoose = require('mongoose');
const validator = require('validator');

const questionSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
    },
    question: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model('Question', questionSchema);
