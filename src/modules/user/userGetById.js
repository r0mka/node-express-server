import { User } from './Model';

export const userGetById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).exec();

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json(err);
  }
};
