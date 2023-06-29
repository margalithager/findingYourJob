"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsRouter = void 0;
const express_1 = __importDefault(require("express"));
const Job_1 = require("../controller/Job");
const jobsRouter = express_1.default.Router();
exports.jobsRouter = jobsRouter;
jobsRouter.post('/', (req, res) => {
    (0, Job_1.createJob)(req, res);
});
jobsRouter.get('/', (req, res) => {
    (0, Job_1.getAllJobs)(req, res);
});
jobsRouter.get('/:id', (req, res) => {
    (0, Job_1.getJobById)(req, res);
});
jobsRouter.put('/:id', (req, res) => {
    (0, Job_1.updateJob)(req, res);
});
jobsRouter.delete('/:id', (req, res) => {
    (0, Job_1.deleteJob)(req, res);
});
