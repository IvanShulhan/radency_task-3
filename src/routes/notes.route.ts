import express from 'express';
import {noteValidator, idValidator}  from '../validators/notes.validators';
import { noteCreateSchema, noteUpdateSchema } from '../schemas/notes.schemas';
import * as noteService from '../services/notes.services';

export const router = express.Router();

router.get('/', noteService.getNotes);
router.get('/stats', noteService.getStatistic);
router.get('/:noteId', idValidator(), noteService.getNote);

router.post(
  '/', 
  express.json(),
  noteValidator(noteCreateSchema), 
  noteService.createNote
);

router.patch(
  '/:noteId',   
  express.json(),
  noteValidator(noteUpdateSchema), 
  idValidator(),
  noteService.editNote
  );
  
  router.delete('/:noteId', idValidator(), noteService.removeNote);