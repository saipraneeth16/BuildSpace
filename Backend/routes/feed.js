/**
 * BuildSpace – Feed API Routes
 * GET  /api/feed          – Get paginated feed items
 * POST /api/feed          – Create a feed post
 * POST /api/feed/:id/like – Like/unlike a feed item
 */

const express = require('express');
const router = express.Router();

let feedItems = [
  {
    id: 1, authorId: 1, author: 'Arjun Mehta',
    content: '🚀 Just launched EduTrack v1.0! A student progress tracking platform built with React + Node.js. Looking for early feedback and contributors!',
    type: 'project', likes: 28, comments: 7, createdAt: new Date(Date.now() - 15 * 60000)
  },
  {
    id: 2, authorId: 2, author: 'Priya Sharma',
    content: '💼 Our team is looking for a React developer for the SDC Hack Week Day 1 challenge. DM me!',
    type: 'opportunity', likes: 14, comments: 3, createdAt: new Date(Date.now() - 45 * 60000)
  },
  {
    id: 3, authorId: 3, author: 'Rahul Kumar',
    content: '🎉 Big news! MotionKit just hit 200 GitHub stars! Working on v2.0 with drag-and-drop support.',
    type: 'update', likes: 62, comments: 15, createdAt: new Date(Date.now() - 120 * 60000)
  },
  {
    id: 4, authorId: 4, author: 'Sneha Patel',
    content: '📢 MindSpace just got selected for the national startup incubator program! 6 months of mentorship and funding.',
    type: 'update', likes: 91, comments: 22, createdAt: new Date(Date.now() - 300 * 60000)
  },
  {
    id: 5, authorId: 6, author: 'Anika Roy',
    content: '🆕 New project: CodeBuddy — a real-time collaborative code editor with WebRTC-based video calls. Open for contributors!',
    type: 'project', likes: 45, comments: 11, createdAt: new Date(Date.now() - 600 * 60000)
  }
];

let nextId = 6;

// GET /api/feed?page=1&limit=10&type=project
router.get('/', (req, res) => {
  let result = [...feedItems];
  const { type, page = 1, limit = 10 } = req.query;

  if (type && type !== 'all') result = result.filter(f => f.type === type);
  result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const start = (parseInt(page) - 1) * parseInt(limit);
  const paginated = result.slice(start, start + parseInt(limit));

  res.json({
    data: paginated,
    total: result.length,
    page: parseInt(page),
    totalPages: Math.ceil(result.length / parseInt(limit))
  });
});

// POST /api/feed – Create post
router.post('/', (req, res) => {
  const { authorId, author, content, type } = req.body;
  if (!authorId || !content) {
    return res.status(400).json({ error: 'authorId and content are required' });
  }

  const validTypes = ['project', 'opportunity', 'update'];
  const newItem = {
    id: nextId++, authorId, author: author || 'Unknown',
    content, type: validTypes.includes(type) ? type : 'update',
    likes: 0, comments: 0, createdAt: new Date()
  };
  feedItems.unshift(newItem);
  res.status(201).json({ data: newItem, message: 'Post created' });
});

// POST /api/feed/:id/like
router.post('/:id/like', (req, res) => {
  const item = feedItems.find(f => f.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Post not found' });
  item.likes++;
  res.json({ likes: item.likes });
});

module.exports = router;