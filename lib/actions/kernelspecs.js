"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes = __importStar(require("../actionTypes"));
exports.fetchKernelspecs = (payload) => ({
    type: actionTypes.FETCH_KERNELSPECS,
    payload
});
exports.fetchKernelspecsFulfilled = (payload) => ({
    type: actionTypes.FETCH_KERNELSPECS_FULFILLED,
    payload
});
exports.fetchKernelspecsFailed = (payload) => ({
    type: actionTypes.FETCH_KERNELSPECS_FAILED,
    payload
});
// "legacy" action that pushes kernelspec info back up
// for the notebook document
function setKernelspecInfo(payload) {
    return {
        type: actionTypes.SET_KERNELSPEC_INFO,
        payload
    };
}
exports.setKernelspecInfo = setKernelspecInfo;
