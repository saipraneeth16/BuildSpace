/**
 * BuildSpace – Express Backend Server
 * Run: npm install && npm start
 * API Base: http://localhost:3001/api
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const opportunitiesRouter = require('./routes/opportunities');
const feedRouter = require('./routes/feed');

const app = express();
const PORT = process.env.PORT || 3001;

// ---- MIDDLEWARE ----
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ---- API ROUTES ----
app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/opportunities', opportunitiesRouter);
app.use('/api/feed', feedRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'BuildSpace API', timestamp: new Date().toISOString() });
});

// 404 handler for API
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Catch-all: serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 BuildSpace server running at http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

module.exports = app;