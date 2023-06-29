import express, { Router, Request, Response } from 'express';
import { createCandidate, getAllCandidates, getCandidateById, updateCandidate, deleteCandidate } from '../controller/Candidate';

const candidatesRouter: Router = express.Router();

candidatesRouter.post('/', (req: Request, res: Response) => {
    createCandidate(req, res);
});

candidatesRouter.get('/', (req: Request, res: Response) => {
    getAllCandidates(req, res);
});

candidatesRouter.get('/:id', (req: Request, res: Response) => {
    getCandidateById(req, res);
});

candidatesRouter.put('/:id', (req: Request, res: Response) => {
    updateCandidate(req, res);
});

candidatesRouter.delete('/:id', (req: Request, res: Response) => {
    deleteCandidate(req, res);
});

export { candidatesRouter };