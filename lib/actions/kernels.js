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
function launchKernelFailed(payload) {
    return {
        type: actionTypes.LAUNCH_KERNEL_FAILED,
        payload,
        error: true
    };
}
exports.launchKernelFailed = launchKernelFailed;
function launchKernelSuccessful(payload) {
    return {
        type: actionTypes.LAUNCH_KERNEL_SUCCESSFUL,
        payload
    };
}
exports.launchKernelSuccessful = launchKernelSuccessful;
function launchKernel(payload) {
    return {
        type: actionTypes.LAUNCH_KERNEL,
        payload
    };
}
exports.launchKernel = launchKernel;
function changeKernelByName(payload) {
    return {
        type: actionTypes.CHANGE_KERNEL_BY_NAME,
        payload
    };
}
exports.changeKernelByName = changeKernelByName;
function launchKernelByName(payload) {
    return {
        type: actionTypes.LAUNCH_KERNEL_BY_NAME,
        payload
    };
}
exports.launchKernelByName = launchKernelByName;
function kernelRawStdout(payload) {
    return {
        type: actionTypes.KERNEL_RAW_STDOUT,
        payload
    };
}
exports.kernelRawStdout = kernelRawStdout;
function kernelRawStderr(payload) {
    return {
        type: actionTypes.KERNEL_RAW_STDERR,
        payload
    };
}
exports.kernelRawStderr = kernelRawStderr;
function killKernel(payload) {
    return {
        type: actionTypes.KILL_KERNEL,
        payload
    };
}
exports.killKernel = killKernel;
function killKernelFailed(payload) {
    return {
        type: actionTypes.KILL_KERNEL_FAILED,
        payload,
        error: true
    };
}
exports.killKernelFailed = killKernelFailed;
function killKernelSuccessful(payload) {
    return {
        type: actionTypes.KILL_KERNEL_SUCCESSFUL,
        payload
    };
}
exports.killKernelSuccessful = killKernelSuccessful;
function interruptKernel(payload) {
    return {
        type: actionTypes.INTERRUPT_KERNEL,
        payload
    };
}
exports.interruptKernel = interruptKernel;
function interruptKernelSuccessful(payload) {
    return {
        type: actionTypes.INTERRUPT_KERNEL_SUCCESSFUL,
        payload
    };
}
exports.interruptKernelSuccessful = interruptKernelSuccessful;
function interruptKernelFailed(payload) {
    return {
        type: actionTypes.INTERRUPT_KERNEL_FAILED,
        payload,
        error: true
    };
}
exports.interruptKernelFailed = interruptKernelFailed;
function restartKernel(payload) {
    return {
        type: actionTypes.RESTART_KERNEL,
        payload
    };
}
exports.restartKernel = restartKernel;
function restartKernelFailed(payload) {
    return {
        type: actionTypes.RESTART_KERNEL_FAILED,
        payload,
        error: true
    };
}
exports.restartKernelFailed = restartKernelFailed;
function restartKernelSuccessful(payload) {
    return {
        type: actionTypes.RESTART_KERNEL_SUCCESSFUL,
        payload
    };
}
exports.restartKernelSuccessful = restartKernelSuccessful;
function sendExecuteRequest(payload) {
    return {
        type: actionTypes.SEND_EXECUTE_REQUEST,
        payload
    };
}
exports.sendExecuteRequest = sendExecuteRequest;
function executeCell(payload) {
    return {
        type: actionTypes.EXECUTE_CELL,
        payload
    };
}
exports.executeCell = executeCell;
function executeAllCells(payload) {
    return {
        type: actionTypes.EXECUTE_ALL_CELLS,
        payload
    };
}
exports.executeAllCells = executeAllCells;
function executeAllCellsBelow(payload) {
    return {
        type: actionTypes.EXECUTE_ALL_CELLS_BELOW,
        payload
    };
}
exports.executeAllCellsBelow = executeAllCellsBelow;
function executeFocusedCell(payload) {
    return {
        type: actionTypes.EXECUTE_FOCUSED_CELL,
        payload
    };
}
exports.executeFocusedCell = executeFocusedCell;
function executeCanceled(payload) {
    return {
        type: actionTypes.EXECUTE_CANCELED,
        payload
    };
}
exports.executeCanceled = executeCanceled;
function executeFailed(payload) {
    return {
        type: actionTypes.EXECUTE_FAILED,
        error: true,
        payload
    };
}
exports.executeFailed = executeFailed;
function deleteConnectionFileFailed(payload) {
    return {
        type: actionTypes.DELETE_CONNECTION_FILE_FAILED,
        payload,
        error: true
    };
}
exports.deleteConnectionFileFailed = deleteConnectionFileFailed;
function deleteConnectionFileSuccessful(payload) {
    return {
        type: actionTypes.DELETE_CONNECTION_FILE_SUCCESSFUL,
        payload
    };
}
exports.deleteConnectionFileSuccessful = deleteConnectionFileSuccessful;
function shutdownReplySucceeded(payload) {
    return {
        type: actionTypes.SHUTDOWN_REPLY_SUCCEEDED,
        payload
    };
}
exports.shutdownReplySucceeded = shutdownReplySucceeded;
function shutdownReplyTimedOut(payload) {
    return {
        type: actionTypes.SHUTDOWN_REPLY_TIMED_OUT,
        payload,
        error: true
    };
}
exports.shutdownReplyTimedOut = shutdownReplyTimedOut;
function setKernelInfo(payload) {
    return {
        type: actionTypes.SET_KERNEL_INFO,
        payload
    };
}
exports.setKernelInfo = setKernelInfo;
