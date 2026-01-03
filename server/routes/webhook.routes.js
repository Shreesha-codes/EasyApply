import express from 'express';
import { handleClerkWebhook } from '../controllers/webhook.controller.js';

const router = express.Router();

// Clerk webhook route (no auth middleware, uses Svix verification)
router.post('/clerk', handleClerkWebhook);

export default router;
