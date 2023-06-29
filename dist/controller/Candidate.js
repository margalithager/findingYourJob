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
exports.deleteCandidate = exports.updateCandidate = exports.getCandidateById = exports.getAllCandidates = exports.createCandidate = void 0;
const Candidate_1 = require("../models/Candidate");
const createCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield Candidate_1.CandidateModel.create(req.body);
        res.json(candidate);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createCandidate = createCandidate;
const getAllCandidates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidates = yield Candidate_1.CandidateModel.find();
        res.json(candidates);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllCandidates = getAllCandidates;
const getCandidateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield Candidate_1.CandidateModel.findById(req.params.id);
        if (!candidate)
            throw new Error('Candidate not found');
        res.json(candidate);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.getCandidateById = getCandidateById;
const updateCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield Candidate_1.CandidateModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!candidate)
            throw new Error('Candidate not found');
        res.json(candidate);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.updateCandidate = updateCandidate;
const deleteCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield Candidate_1.CandidateModel.findByIdAndDelete(req.params.id);
        if (!candidate)
            throw new Error('Candidate not found');
        res.sendStatus(204);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.deleteCandidate = deleteCandidate;
