"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idValidator = exports.noteValidator = void 0;
const notes_schemas_1 = require("../schemas/notes.schemas");
const noteValidator = (schema) => (req, res, next) => {
    schema.validate(req.body)
        .then(() => {
        next();
    })
        .catch((err) => {
        res.statusCode = 400;
        res.send(err.errors);
    });
};
exports.noteValidator = noteValidator;
const idValidator = () => (req, res, next) => (notes_schemas_1.idSchema.validate(req.params)
    .then(() => {
    next();
})
    .catch((err) => {
    res.statusCode = 400;
    res.send(err.errors);
}));
exports.idValidator = idValidator;
//# sourceMappingURL=notes.validators.js.map