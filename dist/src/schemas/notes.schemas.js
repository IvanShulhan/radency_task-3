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
exports.idSchema = exports.noteUpdateSchema = exports.noteCreateSchema = void 0;
const yup = __importStar(require("yup"));
exports.noteCreateSchema = yup.object().shape({
    name: yup
        .string()
        .min(3)
        .max(30)
        .required(),
    category: yup
        .string()
        .oneOf(['Idea', 'Quote', 'Random thought', 'Task'])
        .required(),
    content: yup
        .string()
        .min(5)
        .max(50)
        .required(),
});
exports.noteUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .min(3)
        .max(30),
    category: yup
        .string()
        .oneOf(['Idea', 'Quote', 'Random thought', 'Task']),
    content: yup
        .string()
        .min(5)
        .max(50),
    isArchived: yup.boolean(),
});
exports.idSchema = yup.object({
    noteId: yup.string().required(),
});
//# sourceMappingURL=notes.schemas.js.map