import { get } from 'lodash';
import { User } from './Model';

export const userRegister = async (req, res) => {
  const email = get(req, 'body.email', '');
  const password = get(req, 'body.password', '');
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(200).json('User registered');
  } catch (err) {
    res.status(500).json(err.message);
  }
};
