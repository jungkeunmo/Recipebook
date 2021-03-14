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
  },
  { versionKey: false }
);

export default mongoose.model(`Post`, Post, `Post`);
