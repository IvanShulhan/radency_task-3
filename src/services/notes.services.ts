import * as notesRepository  from '../repositories/notes.repository';

export const findNote = (noteId: string) => {
  return notesRepository.getNoteById(noteId);
}