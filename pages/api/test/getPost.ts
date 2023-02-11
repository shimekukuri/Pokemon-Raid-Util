import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const name: string = req.body.pokeName;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/2`);
  if (!response.ok) {
    res.send({ error: 'Uknown Pokemon' });
    return;
  }
  const data = await response.json();
  res.status(200).send({ body: data.sprites.front_default });
};

export default handler;
