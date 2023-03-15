import User from '@/models/User';
import db from '@/utilities/db/db';
import { NextApiRequest, NextApiResponse } from 'next';

const ACTIONS = {
  UPDATE_FRIENDS: 'UPDATE_FRIENDS',
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    type,
    payload: { sender },
  } = req.body;

  switch (type) {
    case ACTIONS.UPDATE_FRIENDS: {
      console.log(sender);
      try {
        await db.connect();
        let senderAccount = await User.findOne({ email: sender });
        const {
          payload: { add },
        } = req.body;
        console.log(add);
        const accountToAdd = await User.findOne({ name: add });
        console.log(senderAccount);
        senderAccount.friends = [
          ...senderAccount.friends,
          {
            name: accountToAdd.name,
            image: `${accountToAdd.image}`,
            id: `${accountToAdd._id}`,
          },
        ];
        await senderAccount.save();
        await db.disconnect;
        res.status(200).send({
          success: true,
          message: `${senderAccount.name} friends list updated with ${accountToAdd.name}`,
        });
      } catch (err) {
        console.error(err);
        res.status(500).send({ success: false, message: `Failed to update` });
      }
      break;
    }
  }
};

export default handler;
