import express, { Router, Request, Response } from 'express';
import { createJob, getAllJobs, getJobById, updateJob, deleteJob } from '../controller/Job';

const jobsRouter: Router = express.Router();

jobsRouter.post('/', (req: Request, res: Response) => {
    createJob(req, res);
});

jobsRouter.get('/', (req: Request, res: Response) => {
    getAllJobs(req, res);
});

jobsRouter.get('/:id', (req: Request, res: Response) => {
    getJobById(req, res);
});

jobsRouter.put('/:id', (req: Request, res: Response) => {
    updateJob(req, res);
});

jobsRouter.delete('/:id', (req: Request, res: Response) => {
    deleteJob(req, res);
});

export { jobsRouter };