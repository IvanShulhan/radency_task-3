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
exports.editNote = exports.getStatistic = exports.removeNote = exports.createNote = exports.getNoteById = exports.getAllNotes = void 0;
const uuid_1 = require("uuid");
const notes_data_1 = require("../data/notes.data");
const notesHelper = __importStar(require("../helpers/notes.helper"));
const notesStore = {
    notes: notes_data_1.notes,
};
const getAllNotes = () => notesStore.notes;
exports.getAllNotes = getAllNotes;
const getNoteById = (id) => (notesStore.notes.find(note => note.id === id) || null);
exports.getNoteById = getNoteById;
const createNote = ({ name, category, content }) => {
    const newNote = {
        id: (0, uuid_1.v4)(),
        created: notesHelper.getDate(),
        name,
        category,
        content,
        dates: notesHelper.getDates(content),
        isArchived: false,
    };
    notesStore.notes = [...notesStore.notes, newNote];
    return newNote;
};
exports.createNote = createNote;
const removeNote = (id) => {
    notesStore.notes = notesStore.notes.filter(note => note.id !== id);
};
exports.removeNote = removeNote;
const getStatistic = () => (notesStore.notes.reduce((acc, note) => {
    const { category } = note;
    if (!acc.hasOwnProperty(category)) {
        return Object.assign(acc, { [category]: {
                active: note.isArchived ? 0 : 1,
                archived: note.isArchived ? 1 : 0,
            }
        });
    }
    else {
        note.isArchived
            ? acc[category].archived++
            : acc[category].active++;
        return acc;
    }
}, {}));
exports.getStatistic = getStatistic;
const editNote = (id, body) => {
    const note = (0, exports.getNoteById)(id);
    if (note) {
        const { name, category, content } = note;
        note.name = (body === null || body === void 0 ? void 0 : body.name) || name;
        note.category = (body === null || body === void 0 ? void 0 : body.category) || category;
        note.content = (body === null || body === void 0 ? void 0 : body.content) || content;
        note.dates = notesHelper.getDates(note.content);
        if (body.hasOwnProperty('isArchived')) {
            note.isArchived = body.isArchived;
        }
    }
    else {
        throw new Error(`Note with id: ${id} does not exist`);
    }
    return note;
};
exports.editNote = editNote;
//# sourceMappingURL=notes.repository.js.map