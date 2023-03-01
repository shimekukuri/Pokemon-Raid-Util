import mongoose from 'mongoose';

export interface user {
  name: string;
  password: string;
  email: string;
  image: number;
  rating: number;
  banned: boolean;
  confirmedPokemon: string[];
  friends: string[];
}

const Schema = mongoose.Schema;

const userSchema = new Schema<user>(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: Number, required: true, default: 1 },
    rating: { type: Number, required: true, default: 3 },
    banned: { type: Boolean, default: false },
    confirmedPokemon: { type: [String], default: [] },
    friends: {
      type: [
        {
          name: { type: String },
          image: { type: Number },
          id: { type: String },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User =
  (mongoose.models.User as mongoose.Model<user>) ||
  mongoose.model('User', userSchema);

export default User;
