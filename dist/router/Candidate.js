"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatesRouter = void 0;
const express_1 = __importDefault(require("express"));
const Candidate_1 = require("../controller/Candidate");
const candidatesRouter = express_1.default.Router();
exports.candidatesRouter = candidatesRouter;
candidatesRouter.post('/', (req, res) => {
    (0, Candidate_1.createCandidate)(req, res);
});
candidatesRouter.get('/', (req, res) => {
    (0, Candidate_1.getAllCandidates)(req, res);
});
candidatesRouter.get('/:id', (req, res) => {
    (0, Candidate_1.getCandidateById)(req, res);
});
candidatesRouter.put('/:id', (req, res) => {
    (0, Candidate_1.updateCandidate)(req, res);
});
candidatesRouter.delete('/:id', (req, res) => {
    (0, Candidate_1.deleteCandidate)(req, res);
});
