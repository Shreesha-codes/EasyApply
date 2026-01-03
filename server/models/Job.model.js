import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Job description is required']
  },
  requirements: {
    type: String,
    default: ''
  },
  responsibilities: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  level: {
    type: String,
    enum: ['Entry Level', 'Mid Level', 'Senior Level', 'Lead'],
    required: [true, 'Job level is required']
  },
  salary: {
    type: String,
    default: ''
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'Company ID is required']
  },
  date: {
    type: Date,
    default: Date.now
  },
  applicants: {
    type: Number,
    default: 0
  },
  visible: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for search and filtering
jobSchema.index({ title: 'text', location: 'text', category: 'text' });

const Job = mongoose.model('Job', jobSchema);

export default Job;
