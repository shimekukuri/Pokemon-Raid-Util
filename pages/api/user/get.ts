import User from '@/models/User';
import db from '@/utilities/db/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(402).send({ message: 'Incorrect format' });
  }

  const { email } = req.body;

  await db.connect();
  const result = await User.findOne({ email: email });
  await db.disconnect();

  res.status(200).send({ user: result });
};

export default handler;
