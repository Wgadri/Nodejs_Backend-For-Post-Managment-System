import bcrypt from "bcrypt";
import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 8,
        maxLength: 20,
        unique: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxLength: 30
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    }
},
    {timestamps: true}
)

// hashing password
userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//comparing password
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

const User = new mongoose.model("userSchema", userSchema);

export default User;