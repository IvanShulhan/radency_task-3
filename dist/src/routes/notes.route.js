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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const notes_validators_1 = require("../validators/notes.validators");
const notes_schemas_1 = require("../schemas/notes.schemas");
const noteControllers = __importStar(require("../controllers/notes.controllers"));
exports.router = express_1.default.Router();
exports.router.get('/', noteControllers.getNotes);
exports.router.get('/stats', noteControllers.getStatistic);
exports.router.get('/:noteId', (0, notes_validators_1.idValidator)(), noteControllers.getNote);
exports.router.post('/', express_1.default.json(), (0, notes_validators_1.noteValidator)(notes_schemas_1.noteCreateSchema), noteControllers.createNote);
exports.router.patch('/:noteId', express_1.default.json(), (0, notes_validators_1.noteValidator)(notes_schemas_1.noteUpdateSchema), (0, notes_validators_1.idValidator)(), noteControllers.editNote);
exports.router.delete('/:noteId', (0, notes_validators_1.idValidator)(), noteControllers.removeNote);
//# sourceMappingURL=notes.route.js.map