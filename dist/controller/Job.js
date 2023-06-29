"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobById = exports.getAllJobs = exports.createJob = void 0;
const Job_1 = require("../models/Job");
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield Job_1.JobModel.create(req.body);
        res.json(job);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createJob = createJob;
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield Job_1.JobModel.find();
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllJobs = getAllJobs;
const getJobById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield Job_1.JobModel.findById(req.params.id);
        if (!job)
            throw new Error('Candidate not found');
        res.json(job);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.getJobById = getJobById;
const updateJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield Job_1.JobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job)
            throw new Error('job not found');
        res.json(job);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.updateJob = updateJob;
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield Job_1.JobModel.findByIdAndDelete(req.params.id);
        if (!job)
            throw new Error('job not found');
        res.sendStatus(204);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.deleteJob = deleteJob;
