import express from 'express';
import {
  submitApplication,
  getUserApplications,
  getJobApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication
} from '../controllers/application.controller.js';
import { verifyClerkToken, verifyCompanyToken } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// Public route with file upload
router.post('/', upload.single('resume'), submitApplication);

// User routes (require Clerk authentication)
router.get('/user/:userId', verifyClerkToken, getUserApplications);

// Company routes (require company authentication)
router.get('/job/:jobId', verifyCompanyToken, getJobApplications);
router.get('/:id', getApplicationById);
router.put('/:id/status', verifyCompanyToken, updateApplicationStatus);
router.delete('/:id', deleteApplication);

export default router;
