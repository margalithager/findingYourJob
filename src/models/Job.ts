import mongoose from 'mongoose';

export interface Job {
    _id: string;
    candidateCode: string;
    name: string;
    experienceYears: number;
    skills: {
        skill: string;
        experienceYears: number;
    }[];
    exams: {
        name: string;
        score: number;
    }[];
}

export const JobModel = mongoose.model<Job>('Job', new mongoose.Schema({
    candidateCode: { type: String, required: [true, 'candidateCode field is required'] },
    name: {
        type: String, required: [true, 'name field is required'], minlength: 6,
    },
    experienceYears: { type: Number, required: [true, 'experienceYears field is required' ]},
    skills: {
        type: [
            {
                skill: { type: String },
                experienceYears: { type: Number },
            },
        ],
        required: [true, 'skill field is required'],
    },
    exams:
    {
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



