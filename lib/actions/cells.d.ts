/**
 * @module actions
 */
import { CellId, CellType } from "@nteract/commutable";
import { ContentRef, KernelRef } from "@nteract/types";
import { JSONObject } from "@nteract/commutable";
import * as actionTypes from "../actionTypes";
export declare function setExecutionState(payload: {
    kernelStatus: string;
    kernelRef: KernelRef;
}): actionTypes.SetExecutionStateAction;
export declare function clearOutputs(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.ClearOutputs;
export declare function clearAllOutputs(payload: {
    contentRef: ContentRef;
}): actionTypes.ClearAllOutputs;
export declare function moveCell(payload: {
    id: string;
    destinationId: string;
    above: boolean;
    contentRef: ContentRef;
}): actionTypes.MoveCell;
export declare function deleteCell(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.DeleteCell;
export declare function createCellBelow(payload: {
    id?: CellId;
    cellType: CellType;
    source: string;
    contentRef: ContentRef;
}): actionTypes.CreateCellBelow;
export declare function createCellAbove(payload: {
    cellType: CellType;
    id?: string;
    contentRef: ContentRef;
}): actionTypes.CreateCellAbove;
export declare function removeCell(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.RemoveCell;
export declare function createCellAfter(payload: {
    id?: CellId;
    cellType: CellType;
    source: string;
    contentRef: ContentRef;
}): actionTypes.CreateCellAfter;
export declare function createCellBefore(payload: {
    cellType: CellType;
    id?: string;
    contentRef: ContentRef;
}): actionTypes.CreateCellBefore;
export declare function createCellAppend(payload: {
    cellType: CellType;
    contentRef: ContentRef;
}): actionTypes.CreateCellAppend;
export declare function toggleParameterCell(payload: {
    id: CellId;
    contentRef: ContentRef;
}): actionTypes.ToggleTagInCell;
export declare function toggleTagInCell(payload: {
    id: CellId;
    contentRef: ContentRef;
    tag: string;
}): actionTypes.ToggleTagInCell;
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
export declare function setInCell<T>(payload: {
    id: CellId;
    path: string[];
    value: T;
    contentRef: ContentRef;
}): actionTypes.SetInCell<T>;
export declare function updateCellSource(payload: {
    id: CellId;
    value: string;
    contentRef: ContentRef;
}): actionTypes.SetInCell<string>;
export declare function updateCellExecutionCount(payload: {
    id: CellId;
    value: number;
    contentRef: ContentRef;
}): actionTypes.SetInCell<number>;
export declare function unhideAll(payload: {
    outputHidden: boolean;
    inputHidden: boolean;
    contentRef: ContentRef;
}): actionTypes.UnhideAll;
export declare function toggleCellOutputVisibility(payload: {
    id?: CellId;
    contentRef: ContentRef;
}): actionTypes.ToggleCellOutputVisibility;
export declare function toggleCellInputVisibility(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.ToggleCellInputVisibility;
export declare function updateCellStatus(payload: {
    id: string;
    status: string;
    contentRef: ContentRef;
}): actionTypes.UpdateCellStatus;
export declare function focusCell(payload: {
    id: CellId;
    contentRef: ContentRef;
}): actionTypes.FocusCell;
export declare function focusNextCell(payload: {
    id?: string;
    createCellIfUndefined: boolean;
    contentRef: ContentRef;
}): actionTypes.FocusNextCell;
export declare function focusNextCellEditor(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.FocusNextCellEditor;
export declare function focusPreviousCell(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.FocusPreviousCell;
export declare function focusCellEditor(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.FocusCellEditor;
export declare function focusPreviousCellEditor(payload: {
    id?: string;
    contentRef: ContentRef;
}): actionTypes.FocusPreviousCellEditor;
export declare function copyCell(payload: {
    id?: CellId;
    contentRef: ContentRef;
}): actionTypes.CopyCell;
export declare function cutCell(payload: {
    id?: CellId;
    contentRef: ContentRef;
}): actionTypes.CutCell;
export declare function pasteCell(payload: {
    contentRef: ContentRef;
}): actionTypes.PasteCell;
export declare function changeCellType(payload: {
    id?: CellId;
    to: CellType;
    contentRef: ContentRef;
}): actionTypes.ChangeCellType;
export declare function updateOutputMetadata(payload: {
    id: CellId;
    metadata: JSONObject;
    contentRef: ContentRef;
    index: number;
    mediaType: string;
}): actionTypes.UpdateOutputMetadata;
