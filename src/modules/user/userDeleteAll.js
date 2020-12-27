import { User } from './Model';

export const userDeleteAll = async (req, res) => {
  try {
    await User.deleteMany().exec();

    res.status(200).json('Users have been deleted');
  } catch (err) {
    res.status(400).json(err.message);
  }
};
