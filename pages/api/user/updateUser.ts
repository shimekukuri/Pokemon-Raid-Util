import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('meep ');
  const data = JSON.parse(req.body);
  console.log(data);
};

export default handler;
