import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    hit: {
      type: Number,
      required: true,
      defult: 0,
    },
    author: {
      type: String,
      required: true,
    },
    lastUpdate: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },

    no: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Post`, Post, `Post`);
