import express from 'express';
import {
  registerCompany,
  loginCompany,
  getCompanyProfile,
  updateCompanyProfile,
  getCompanyDashboard,
  getCompanyManageJobs
} from '../controllers/company.controller.js';
import { verifyCompanyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerCompany);
router.post('/login', loginCompany);

// Protected routes (require company authentication)
router.get('/profile', verifyCompanyToken, getCompanyProfile);
router.put('/profile', verifyCompanyToken, updateCompanyProfile);
router.get('/dashboard', verifyCompanyToken, getCompanyDashboard);
router.get('/manage-jobs', verifyCompanyToken, getCompanyManageJobs);

export default router;
