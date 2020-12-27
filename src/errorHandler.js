export const errorHandler = (app) => {
  app.use((req, res) => {
    res.status(404).json({ err: 'API NOT FOUND' });
  });
};
