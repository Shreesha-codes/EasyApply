import express from 'express';
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getJobsByCompany
} from '../controllers/job.controller.js';
import { verifyCompanyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.get('/company/:companyId', getJobsByCompany);

// Protected routes (require company authentication)
router.post('/', verifyCompanyToken, createJob);
router.put('/:id', verifyCompanyToken, updateJob);
router.delete('/:id', verifyCompanyToken, deleteJob);

export default router;
