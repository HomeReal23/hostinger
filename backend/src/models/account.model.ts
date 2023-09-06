import mongoose, {Schema } from 'mongoose';

const accountSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  picture: { type: String, required: false },
  number: { type: String, required: false },
  role: { type: String, enum: ['client', 'commercial'], required: true },
  provider: { type: String, required: false },
  type: { type: String, required: false },
  providerAccountId: { type: String, required: false },
  access_token: { type: String, required: false },
  expires_at: { type: Date, required: false },
  scope: { type: String, required: false },
  token_type: { type: String, required: false },
  id_token: { type: String, required: false },
  userId: { type: mongoose.Types.ObjectId, required: false },
});

const Account = mongoose.model('Account', accountSchema)

export default Account