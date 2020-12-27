import { get } from 'lodash';

export const infoGet = (req, res) => {
  const obj = {
    name: 'roman nikolaenkov web dev',
  };

  const name = get(obj, 'name', 'unknown');

  res.json({ msg: `Info route ${name}` });
};
