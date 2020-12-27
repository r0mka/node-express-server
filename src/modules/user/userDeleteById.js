import { User } from './Model';

export const userDeleteById = async (req, res) => {
  const _id = req.params.id;

  try {
    await User.deleteOne({ _id }).exec();

    res.status(200).json('User has been deleted');
  } catch (err) {
    res.status(400).json(err.message);
  }
};
