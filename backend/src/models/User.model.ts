import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  movil: { type: String, required: false },
  surname: { type: String, required: false },
  email: { type: String, required: true },
  emailVerifed: {type: Date, required: false},
  image: { type: String, required: true },
  role: { type: String, enum: ['client', 'comercial'], required: true },
});

const User = mongoose.model('User', userSchema, "User")

export default User