import { User } from './Model';

export const userGetAll = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ err });
  }
};
