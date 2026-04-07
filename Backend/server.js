const express = require('express');
const cors = require('cors');
const path = require('path');

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const opportunitiesRouter = require('./routes/opportunities');
const feedRouter = require('./routes/feed');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../frontend')));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});


app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/opportunities', opportunitiesRouter);
app.use('/api/feed', feedRouter);


app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'BuildSpace API', timestamp: new Date().toISOString() });
});


app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 BuildSpace server running at http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

module.exports = app;