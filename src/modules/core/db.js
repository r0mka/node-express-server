import mongoose from 'mongoose';

export const dbConnect = () => {
  mongoose.connect('mongodb://localhost/node-express-server', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const db = mongoose.connection;
  db.on('error', () => console.log('CONNECTION ERROR'));
  db.once('open', () => console.log('CONNECTED TO DATABASE'));
};
