import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Question = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },
    update: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Question`, Question, `Question`);

signup(
  {
    username: {
      type: String,
      required: true,
    },
    useremail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    onepassword: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`signUp`, signUp, `signUp`);
