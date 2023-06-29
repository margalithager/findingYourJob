"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const Candidate_1 = require("./router/Candidate");
const Job_1 = require("./router/Job");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI || '';
mongoose_1.default.connect('mongodb://localhost:27017/Jobs')
    .then(() => {
    console.log('Connected to database');
})
    .catch((error) => {
    console.log('Database connection failed:', error.message);
});
app.use('/candidates', Candidate_1.candidatesRouter);
app.use('/jobs', Job_1.jobsRouter);
app.listen(4545, () => {
    console.log(`Server listening on port 4545`);
});
