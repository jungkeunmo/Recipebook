import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Writing = new Schema({

    title: {
        type : String,
        required: true,
    },
},
{versionKey: false});

export default mongoose.model(`Writing`, Writing, `Writing`);