import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    rating: { type: Number, required: true, default: 3 },
    banned: { type: Boolean, default: false },
    confirmedPokemon: [{ pokemon: String }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
