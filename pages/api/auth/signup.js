import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utilities/db/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 3
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }
  console.log('after');
  await db.connect();
  console.log(db);
  const existingUser = await User.findOne({ email: email });
  console.log(existingUser);
  if (existingUser) {
    res.status(422).json({ message: 'User exists already! ' });
    await db.disconnect();
    return;
  }

  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
  });

  const user = await newUser.save();
  await db.disconnect();

  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    email: user.email,
  });
};

export default handler;
