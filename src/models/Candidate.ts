import mongoose from 'mongoose';

export interface Candidate {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  skills?: string[];
  resume?: string;
}

export const CandidateModel = mongoose.model<Candidate>('Candidate', new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  skills: { type: [String] },
  resume: { type: String },
}));