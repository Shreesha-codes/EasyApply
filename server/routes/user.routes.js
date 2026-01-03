import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  uploadResume
} from '../controllers/user.controller.js';
import { verifyClerkToken } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// All routes require Clerk authentication
router.get('/profile', verifyClerkToken, getUserProfile);
router.put('/profile', verifyClerkToken, updateUserProfile);
router.post('/resume', verifyClerkToken, upload.single('resume'), uploadResume);

export default router;
