import { Request, Response } from 'express';
import { CandidateModel } from '../models/Candidate'

export const createCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await CandidateModel.create(req.body);
    res.json(candidate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await CandidateModel.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCandidateById = async (req: Request, res: Response) => {
  try {
    const candidate = await CandidateModel.findById(req.params.id);
    if (!candidate) throw new Error('Candidate not found');
    res.json(candidate);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await CandidateModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!candidate) throw new Error('Candidate not found');
    res.json(candidate);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await CandidateModel.findByIdAndDelete(req.params.id);
    if (!candidate) throw new Error('Candidate not found');
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};