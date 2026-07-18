import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['candidate', 'admin'], default: 'candidate' }
},
  {timestamps: true}
);



// Hash Password
userSchema.pre("save", async function () {
    if(!this.isModified("password")) return 
    this.password = await bcrypt.hash(this.password, 12)
})

// Compare password
userSchema.methods.comparePassword = async function (userPassword){
    return bcrypt.compare(userPassword, this.password)
}

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name, role: this.role }, 
    process.env.JWT_SECRET,                                 
    { expiresIn: process.env.JWT_LIFETIME || '30d' }  
  );
};

const User = mongoose.model('User', userSchema);
export default User;