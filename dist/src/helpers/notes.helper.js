"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDates = exports.getDate = void 0;
const getDate = () => {
    const options = { month: 'long', year: 'numeric', day: '2-digit' };
    return new Date().toLocaleDateString('en-US', options);
};
exports.getDate = getDate;
const getDates = (content) => {
    var _a;
    const reg = /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})/g;
    return ((_a = content.match(reg)) === null || _a === void 0 ? void 0 : _a.join(', ')) || '';
};
exports.getDates = getDates;
//# sourceMappingURL=notes.helper.js.map