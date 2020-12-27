import { get } from 'lodash';

export const info = (req, res) => {
  const obj = {
    name: 'roman nikolaenkov web dev',
  };

  const name = get(obj, 'name', 'unknown');

  res.json({ msg: `Info route ${name}` });
};
