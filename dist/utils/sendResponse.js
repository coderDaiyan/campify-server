"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, resData) => {
    res.status(resData.status).json(resData);
};
exports.sendResponse = sendResponse;
