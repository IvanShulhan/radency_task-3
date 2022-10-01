"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editNote = exports.removeNote = exports.createNote = exports.getStatistic = exports.getNotes = exports.getNote = void 0;
const notesRepository = __importStar(require("../repositories/notes.repository"));
const notes_services_1 = require("../services/notes.services");
const getNote = (req, res) => {
    const { noteId } = req.params;
    const note = (0, notes_services_1.findNote)(noteId);
    if (!note) {
        res.sendStatus(404);
        return;
    }
    res.send(note);
};
exports.getNote = getNote;
const getNotes = (_, res) => {
    res.send(notesRepository.getAllNotes());
};
exports.getNotes = getNotes;
const getStatistic = (_, res) => {
    const notes = notesRepository.getAllNotes();
    if (!notes) {
        res.status(404);
        return;
    }
    res.send(notesRepository.getStatistic());
};
exports.getStatistic = getStatistic;
const createNote = (req, res) => {
    const { name, category, content } = req.body;
    const note = notesRepository.createNote({ name, category, content });
    res.statusCode = 201;
    res.send(note);
};
exports.createNote = createNote;
const removeNote = (req, res) => {
    const { noteId } = req.params;
    const note = (0, notes_services_1.findNote)(noteId);
    if (!note) {
        res.status(404);
        return;
    }
    notesRepository.removeNote(req.params.noteId);
    res.sendStatus(204);
};
exports.removeNote = removeNote;
const editNote = (req, res) => {
    const { noteId } = req.params;
    let note = (0, notes_services_1.findNote)(noteId);
    if (!note) {
        res.status(404);
        return;
    }
    note = notesRepository.editNote(noteId, req.body);
    res.send(note);
};
exports.editNote = editNote;
//# sourceMappingURL=notes.controllers.js.map