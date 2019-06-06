"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Local modules
const actionTypes = __importStar(require("../actionTypes"));
exports.toggleHeaderEditor = (payload) => ({
    type: actionTypes.TOGGLE_HEADER_EDITOR,
    payload
});
exports.changeContentName = (payload) => ({
    type: actionTypes.CHANGE_CONTENT_NAME,
    payload
});
exports.changeContentNameFulfilled = (payload) => ({
    type: actionTypes.CHANGE_CONTENT_NAME_FULFILLED,
    payload
});
exports.changeContentNameFailed = (payload) => ({
    type: actionTypes.CHANGE_CONTENT_NAME_FAILED,
    payload
});
exports.fetchContent = (payload) => ({
    type: actionTypes.FETCH_CONTENT,
    payload
});
exports.fetchContentFulfilled = (payload) => ({
    type: actionTypes.FETCH_CONTENT_FULFILLED,
    payload
});
exports.fetchContentLoaded = (payload) => ({
    type: actionTypes.FETCH_CONTENT_LOADED,
    payload
});
exports.fetchContentFailed = (payload) => ({
    type: actionTypes.FETCH_CONTENT_FAILED,
    payload,
    error: true
});
function changeFilename(payload) {
    return {
        type: actionTypes.CHANGE_FILENAME,
        payload
    };
}
exports.changeFilename = changeFilename;
function downloadContent(payload) {
    return {
        type: actionTypes.DOWNLOAD_CONTENT,
        payload
    };
}
exports.downloadContent = downloadContent;
function downloadContentFailed(payload) {
    return {
        type: actionTypes.DOWNLOAD_CONTENT_FAILED,
        payload
    };
}
exports.downloadContentFailed = downloadContentFailed;
function downloadContentFulfilled(payload) {
    return {
        type: actionTypes.DOWNLOAD_CONTENT_FULFILLED,
        payload
    };
}
exports.downloadContentFulfilled = downloadContentFulfilled;
function save(payload) {
    return {
        type: actionTypes.SAVE,
        payload
    };
}
exports.save = save;
function saveAs(payload) {
    return {
        type: actionTypes.SAVE_AS,
        payload
    };
}
exports.saveAs = saveAs;
function saveFailed(payload) {
    return {
        type: actionTypes.SAVE_FAILED,
        payload,
        error: true
    };
}
exports.saveFailed = saveFailed;
function saveFulfilled(payload) {
    return {
        type: actionTypes.SAVE_FULFILLED,
        payload
    };
}
exports.saveFulfilled = saveFulfilled;
// TODO: New Notebook action should use a kernel spec type
function newNotebook(payload) {
    return {
        type: actionTypes.NEW_NOTEBOOK,
        payload: {
            kernelSpec: payload.kernelSpec,
            cwd: payload.cwd || process.cwd(),
            kernelRef: payload.kernelRef,
            contentRef: payload.contentRef
        }
    };
}
exports.newNotebook = newNotebook;
function updateFileText(payload) {
    return {
        type: actionTypes.UPDATE_FILE_TEXT,
        payload: {
            contentRef: payload.contentRef,
            text: payload.text
        }
    };
}
exports.updateFileText = updateFileText;
