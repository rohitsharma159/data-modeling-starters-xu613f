import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    useername: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
