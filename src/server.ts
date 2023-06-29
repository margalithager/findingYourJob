import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import { candidatesRouter } from './router/Candidate';
import { jobsRouter } from './router/Job';

const app = express();
app.use(bodyParser.json());

// const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI || '';

mongoose.connect('mongodb://localhost:27017/Jobs', 
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// } as ConnectOptions
)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Database connection failed:', error.message);
  });

app.use('/candidates', candidatesRouter);
app.use('/jobs', jobsRouter);
app.listen(4545, () => {
  console.log(`Server listening on port 4545`);
});