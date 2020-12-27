import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // select false means we exclude that from showing
  },
  age: {
    type: String,
  },
});

UserSchema.index({ email: 1 }, { unique: true });
export const User = model('User', UserSchema);
