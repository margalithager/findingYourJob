"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.JobModel = mongoose_1.default.model('Job', new mongoose_1.default.Schema({
    candidateCode: { type: String, required: [true, 'candidateCode field is required'] },
    name: {
        type: String, required: [true, 'name field is required'], minlength: 6,
    },
    experienceYears: { type: Number, required: [true, 'experienceYears field is required'] },
    skills: {
        type: [
            {
                skill: { type: String },
                experienceYears: { type: Number },
            },
        ],
        required: [true, 'skill field is required'],
    },
    exams: {
        type: [
            {
                name: { type: String },
                score: { type: Number },
            },
        ],
        required: [true, 'exams field is required'],
        maxlength: 3
    },
}));
