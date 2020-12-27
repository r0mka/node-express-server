import { User } from './Model';

export const userUpdateById = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  delete req.body.password;

  console.log(data);
  try {
    const user = await User.update({ _id }, { ...data }).exec();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
