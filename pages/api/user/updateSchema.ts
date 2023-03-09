import db from '@/utilities/db/db';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const meep = await User.updateMany({ bio: '', posts: [{ slug: 'test' }] });
  await db.disconnect();
  res.status(200).send(JSON.stringify({ meep }));
};

export default handler;
