import express from 'express';
import {noteValidator, idValidator}  from '../validators/notes.validators';
import { noteCreateSchema, noteUpdateSchema } from '../schemas/notes.schemas';
import * as noteControllers from '../controllers/notes.controllers';

export const router = express.Router();

router.get('/', noteControllers.getNotes);
router.get('/stats', noteControllers.getStatistic);
router.get('/:noteId', idValidator(), noteControllers.getNote);

router.post(
  '/', 
  express.json(),
  noteValidator(noteCreateSchema), 
  noteControllers.createNote
);

router.patch(
  '/:noteId',   
  express.json(),
  noteValidator(noteUpdateSchema), 
  idValidator(),
  noteControllers.editNote
  );
  
  router.delete('/:noteId', idValidator(), noteControllers.removeNote);