import express from 'express';
import cors from 'cors';

import { router as notesRouter } from './src/routes/notes.route';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/notes', notesRouter)

app.listen(port);