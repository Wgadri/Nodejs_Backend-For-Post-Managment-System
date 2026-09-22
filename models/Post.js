import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    description : {
        type: String,
        required: true,
        trim: true
    },

    age: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 100
    }
},
    {timestamps: true}
)

const Post = new mongoose.model("postSchema", postSchema);

export default Post;