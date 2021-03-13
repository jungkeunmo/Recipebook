import mongoose from "mongoose";

const Schema = mongoose.Schema;

const post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`post`, post, `post`);
