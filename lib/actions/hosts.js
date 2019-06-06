"use strict";
/**
 * @module actions
 */
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
exports.publishToBookstore = (payload) => {
    return {
        type: actionTypes.PUBLISH_TO_BOOKSTORE,
        payload
    };
};
exports.publishToBookstoreAfterSave = (payload) => {
    return {
        type: actionTypes.PUBLISH_TO_BOOKSTORE_AFTER_SAVE,
        payload
    };
};
exports.publishToBookstoreSucceeded = (payload) => ({
    type: actionTypes.PUBLISH_TO_BOOKSTORE_SUCCEEDED,
    payload
});
exports.publishToBookstoreFailed = (payload) => ({
    type: actionTypes.PUBLISH_TO_BOOKSTORE_FAILED,
    payload
});
