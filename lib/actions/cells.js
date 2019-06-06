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
function setExecutionState(payload) {
    return {
        type: actionTypes.SET_EXECUTION_STATE,
        payload
    };
}
exports.setExecutionState = setExecutionState;
function clearOutputs(payload) {
    return {
        type: actionTypes.CLEAR_OUTPUTS,
        payload
    };
}
exports.clearOutputs = clearOutputs;
function clearAllOutputs(payload) {
    return {
        type: actionTypes.CLEAR_ALL_OUTPUTS,
        payload
    };
}
exports.clearAllOutputs = clearAllOutputs;
function moveCell(payload) {
    return {
        type: actionTypes.MOVE_CELL,
        payload
    };
}
exports.moveCell = moveCell;
function deleteCell(payload) {
    return {
        type: actionTypes.DELETE_CELL,
        payload
    };
}
exports.deleteCell = deleteCell;
function createCellBelow(payload) {
    return {
        type: actionTypes.CREATE_CELL_BELOW,
        payload
    };
}
exports.createCellBelow = createCellBelow;
function createCellAbove(payload) {
    return {
        type: actionTypes.CREATE_CELL_ABOVE,
        payload
    };
}
exports.createCellAbove = createCellAbove;
// Deprecation Warning: removeCell() is being deprecated. Please use deleteCell() instead
function removeCell(payload) {
    return {
        type: actionTypes.REMOVE_CELL,
        payload
    };
}
exports.removeCell = removeCell;
// Deprecation Warning: createCellAfter() is being deprecated. Please use createCellBelow() instead
function createCellAfter(payload) {
    return {
        type: actionTypes.CREATE_CELL_AFTER,
        payload
    };
}
exports.createCellAfter = createCellAfter;
// Deprecation Warning: createCellBefore is deprecated. Please use createCellAbove() instead
function createCellBefore(payload) {
    return {
        type: actionTypes.CREATE_CELL_BEFORE,
        payload
    };
}
exports.createCellBefore = createCellBefore;
function createCellAppend(payload) {
    return {
        type: actionTypes.CREATE_CELL_APPEND,
        payload
    };
}
exports.createCellAppend = createCellAppend;
function toggleParameterCell(payload) {
    // Tag comes via Papermill
    return toggleTagInCell({
        id: payload.id,
        contentRef: payload.contentRef,
        tag: "parameters"
    });
}
exports.toggleParameterCell = toggleParameterCell;
function toggleTagInCell(payload) {
    return {
        type: actionTypes.TOGGLE_TAG_IN_CELL,
        payload
    };
}
exports.toggleTagInCell = toggleTagInCell;
/**
 * setInCell can generically be used to set any attribute on a cell, including
 * and especially for changing metadata per cell.
 * @param {CellId} payload.id    cell ID
 * @param {Array<string>} payload.path  path within a cell to set
 * @param {any} payload.value what to set it to
 *
 * Example:
 *
 * > action = setInCell('123', ['metadata', 'cool'], true)
 * > documentReducer(state, action)
 * {
 *   ...
 *   '123': {
 *     'metadata': {
 *       'cool': true
 *     }
 *   }
 * }
 *
 */
function setInCell(payload) {
    return {
        type: actionTypes.SET_IN_CELL,
        payload
    };
}
exports.setInCell = setInCell;
function updateCellSource(payload) {
    return setInCell(Object.assign({}, payload, { path: ["source"] }));
}
exports.updateCellSource = updateCellSource;
function updateCellExecutionCount(payload) {
    return setInCell(Object.assign({}, payload, { path: ["execution_count"] }));
}
exports.updateCellExecutionCount = updateCellExecutionCount;
function unhideAll(payload) {
    return {
        type: "UNHIDE_ALL",
        payload
    };
}
exports.unhideAll = unhideAll;
function toggleCellOutputVisibility(payload) {
    return {
        type: actionTypes.TOGGLE_CELL_OUTPUT_VISIBILITY,
        payload
    };
}
exports.toggleCellOutputVisibility = toggleCellOutputVisibility;
function toggleCellInputVisibility(payload) {
    return {
        type: actionTypes.TOGGLE_CELL_INPUT_VISIBILITY,
        payload
    };
}
exports.toggleCellInputVisibility = toggleCellInputVisibility;
function updateCellStatus(payload) {
    return {
        type: actionTypes.UPDATE_CELL_STATUS,
        payload
    };
}
exports.updateCellStatus = updateCellStatus;
/* Unlike focus next & previous, to set focus, we require an ID,
     because the others are based on there already being a focused cell */
function focusCell(payload) {
    return {
        type: actionTypes.FOCUS_CELL,
        payload
    };
}
exports.focusCell = focusCell;
function focusNextCell(payload) {
    return {
        type: actionTypes.FOCUS_NEXT_CELL,
        payload
    };
}
exports.focusNextCell = focusNextCell;
function focusNextCellEditor(payload) {
    return {
        type: actionTypes.FOCUS_NEXT_CELL_EDITOR,
        payload
    };
}
exports.focusNextCellEditor = focusNextCellEditor;
function focusPreviousCell(payload) {
    return {
        type: actionTypes.FOCUS_PREVIOUS_CELL,
        payload
    };
}
exports.focusPreviousCell = focusPreviousCell;
function focusCellEditor(payload) {
    return {
        type: actionTypes.FOCUS_CELL_EDITOR,
        payload
    };
}
exports.focusCellEditor = focusCellEditor;
function focusPreviousCellEditor(payload) {
    return {
        type: actionTypes.FOCUS_PREVIOUS_CELL_EDITOR,
        payload
    };
}
exports.focusPreviousCellEditor = focusPreviousCellEditor;
function copyCell(payload) {
    return {
        type: actionTypes.COPY_CELL,
        payload
    };
}
exports.copyCell = copyCell;
function cutCell(payload) {
    return {
        type: actionTypes.CUT_CELL,
        payload
    };
}
exports.cutCell = cutCell;
function pasteCell(payload) {
    return {
        type: actionTypes.PASTE_CELL,
        payload
    };
}
exports.pasteCell = pasteCell;
function changeCellType(payload) {
    return {
        type: actionTypes.CHANGE_CELL_TYPE,
        payload
    };
}
exports.changeCellType = changeCellType;
function updateOutputMetadata(payload) {
    return {
        type: actionTypes.UPDATE_OUTPUT_METADATA,
        payload
    };
}
exports.updateOutputMetadata = updateOutputMetadata;
