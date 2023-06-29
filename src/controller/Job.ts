import { Request, Response } from 'express';
import { JobModel } from '../models/Job'

export const createJob = async (req: Request, res: Response) => {
  try {
    const job = await JobModel.create(req.body);
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await JobModel.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await JobModel.findById(req.params.id);
    if (!job) throw new Error('Candidate not found');
    res.json(job);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const job = await JobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) throw new Error('job not found');
    res.json(job);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const job = await JobModel.findByIdAndDelete(req.params.id);
    if (!job) throw new Error('job not found');
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};