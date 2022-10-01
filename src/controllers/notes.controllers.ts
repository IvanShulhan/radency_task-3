import express from 'express';
import * as notesRepository  from '../repositories/notes.repository';
import { findNote } from '../services/notes.services';

export const getNote = (req: express.Request, res: express.Response) => {
  const { noteId } = req.params;
  const note = findNote(noteId);

  if (!note) {
    res.sendStatus(404);
    return;
  }

  res.send(note);
};

export const getNotes = (_: express.Request, res: express.Response) => {
  res.send(notesRepository.getAllNotes())
};

export const getStatistic = (_: express.Request, res: express.Response) => {
  const notes = notesRepository.getAllNotes();

  if (!notes) {
    res.status(404);
    return;
  }

  res.send(notesRepository.getStatistic())
}

export const createNote = (req: express.Request, res: express.Response) => {
  const { name, category, content } = req.body;

  const note = notesRepository.createNote({ name, category, content });

  res.statusCode = 201;
  res.send(note);
}

export const removeNote = (req: express.Request, res: express.Response) => {
  const { noteId } = req.params;
  const note = findNote(noteId);

  if (!note) {
    res.status(404);
    return;
  }

  notesRepository.removeNote(req.params.noteId);
  res.sendStatus(204);
};

export const editNote = (req: express.Request, res: express.Response) => {
  const { noteId } = req.params;
  let note = findNote(noteId);

  if (!note) {
    res.status(404);
    return;
  }

  note = notesRepository.editNote(noteId, req.body);
  res.send(note);
}