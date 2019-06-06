/**
 * @module actions
 */
import { ContentRef, KernelRef, KernelspecInfo } from "@nteract/types";
import { contents } from "rx-jupyter";
import * as actionTypes from "../actionTypes";
export declare const toggleHeaderEditor: (payload: {
    contentRef: string;
}) => actionTypes.ToggleHeaderEditor;
export declare const changeContentName: (payload: {
    filepath: string;
    contentRef: string;
    prevFilePath: string;
}) => actionTypes.ChangeContentName;
export declare const changeContentNameFulfilled: (payload: {
    filepath: string;
    contentRef: string;
    prevFilePath: string;
}) => actionTypes.ChangeContentNameFulfilled;
export declare const changeContentNameFailed: (payload: {
    basepath: string;
    filepath: string;
    error: Error;
    contentRef: string;
    prevFilePath: string;
}) => actionTypes.ChangeContentNameFailed;
export declare const fetchContent: (payload: {
    filepath: string;
    params: object;
    kernelRef: string;
    contentRef: string;
}) => actionTypes.FetchContent;
export declare const fetchContentFulfilled: (payload: {
    filepath: string;
    model: contents.IContent<contents.FileType>;
    kernelRef: string;
    contentRef: string;
}) => actionTypes.FetchContentFulfilled;
export declare const fetchContentLoaded: (payload: {
    filepath: string;
    model: contents.IContent<contents.FileType>;
    kernelRef: string;
    contentRef: string;
}) => actionTypes.FetchContentLoaded;
export declare const fetchContentFailed: (payload: {
    filepath: string;
    error: Error;
    kernelRef: string;
    contentRef: string;
}) => actionTypes.FetchContentFailed;
export declare function changeFilename(payload: {
    filepath?: string;
    contentRef: ContentRef;
}): actionTypes.ChangeFilenameAction;
export declare function downloadContent(payload: {
    contentRef: ContentRef;
}): actionTypes.DownloadContent;
export declare function downloadContentFailed(payload: {
    contentRef: ContentRef;
}): actionTypes.DownloadContentFailed;
export declare function downloadContentFulfilled(payload: {
    contentRef: ContentRef;
}): actionTypes.DownloadContentFulfilled;
export declare function save(payload: {
    contentRef: ContentRef;
}): actionTypes.Save;
export declare function saveAs(payload: {
    filepath: string;
    contentRef: ContentRef;
}): actionTypes.SaveAs;
export declare function saveFailed(payload: {
    error: Error;
    contentRef: ContentRef;
}): actionTypes.SaveFailed;
export declare function saveFulfilled(payload: {
    contentRef: ContentRef;
    model: any;
}): actionTypes.SaveFulfilled;
export declare function newNotebook(payload: {
    kernelSpec: KernelspecInfo;
    cwd: string;
    kernelRef: KernelRef;
    contentRef: ContentRef;
}): actionTypes.NewNotebook;
export declare function updateFileText(payload: {
    contentRef: ContentRef;
    text: string;
}): actionTypes.UpdateFileText;
