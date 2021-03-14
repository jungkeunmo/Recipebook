import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Login = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    sef: `User`,
  },
});

export default mongoose.model(`User`, User, `User`);
