/**
 * @module actions
 */
import { ContentRef, KernelRef, KernelspecInfo } from "@nteract/types";
export declare const TOGGLE_HEADER_EDITOR = "CORE/TOGGLE_HEADER_EDITOR";
export interface ToggleHeaderEditor {
    type: "CORE/TOGGLE_HEADER_EDITOR";
    payload: {
        contentRef: ContentRef;
    };
}
export declare const CHANGE_CONTENT_NAME = "CORE/CHANGE_CONTENT_NAME";
export interface ChangeContentName {
    type: "CORE/CHANGE_CONTENT_NAME";
    payload: {
        contentRef: ContentRef;
        filepath: string;
        prevFilePath: string;
    };
}
export declare const CHANGE_CONTENT_NAME_FULFILLED = "CORE/CHANGE_CONTENT_NAME_FULFILLED";
export interface ChangeContentNameFulfilled {
    type: "CORE/CHANGE_CONTENT_NAME_FULFILLED";
    payload: {
        contentRef: ContentRef;
        filepath: string;
        prevFilePath: string;
    };
}
export declare const CHANGE_CONTENT_NAME_FAILED = "CORE/CHANGE_CONTENT_NAME_FAILED";
export interface ChangeContentNameFailed {
    type: "CORE/CHANGE_CONTENT_NAME_FAILED";
    payload: {
        basepath: string;
        contentRef: ContentRef;
        error: Error;
        filepath: string;
        prevFilePath: string;
    };
}
export declare const FETCH_CONTENT = "CORE/FETCH_CONTENT";
export interface FetchContent {
    type: "CORE/FETCH_CONTENT";
    payload: {
        filepath: string;
        params: object;
        kernelRef: KernelRef;
        contentRef: ContentRef;
    };
}
export declare const FETCH_CONTENT_FULFILLED = "CORE/FETCH_CONTENT_FULFILLED";
export interface FetchContentFulfilled {
    type: "CORE/FETCH_CONTENT_FULFILLED";
    payload: {
        filepath: string;
        model: any;
        kernelRef: KernelRef;
        contentRef: ContentRef;
        created?: Date | null;
        lastSaved?: Date | null;
    };
}
export declare const FETCH_CONTENT_LOADED = "CORE/FETCH_CONTENT_LOADED";
export interface FetchContentLoaded {
    type: "CORE/FETCH_CONTENT_LOADED";
    payload: {
        filepath: string;
        model: any;
        kernelRef: KernelRef;
        contentRef: ContentRef;
        created?: Date | null;
        lastSaved?: Date | null;
    };
}
export declare const FETCH_CONTENT_FAILED = "CORE/FETCH_CONTENT_FAILED";
export interface FetchContentFailed {
    type: "CORE/FETCH_CONTENT_FAILED";
    payload: {
        filepath: string;
        error: Error;
        kernelRef: KernelRef;
        contentRef: ContentRef;
    };
    error: true;
}
export declare const DOWNLOAD_CONTENT = "CORE/DOWNLOAD_CONTENT";
export interface DownloadContent {
    type: "CORE/DOWNLOAD_CONTENT";
    payload: {
        contentRef: ContentRef;
    };
}
export declare const DOWNLOAD_CONTENT_FAILED = "CORE/DOWNLOAD_CONTENT_FAILED";
export interface DownloadContentFailed {
    type: "CORE/DOWNLOAD_CONTENT_FAILED";
    payload: {
        contentRef: ContentRef;
    };
}
export declare const DOWNLOAD_CONTENT_FULFILLED = "CORE/DOWNLOAD_CONTENT_FULFILLED";
export interface DownloadContentFulfilled {
    type: "CORE/DOWNLOAD_CONTENT_FULFILLED";
    payload: {
        contentRef: ContentRef;
    };
}
export declare const SAVE = "SAVE";
export interface Save {
    type: "SAVE";
    payload: {
        contentRef: ContentRef;
    };
}
export declare const SAVE_AS = "SAVE_AS";
export interface SaveAs {
    type: "SAVE_AS";
    payload: {
        filepath: string;
        contentRef: ContentRef;
    };
}
export declare const SAVE_FAILED = "SAVE_FAILED";
export interface SaveFailed {
    type: "SAVE_FAILED";
    payload: {
        contentRef: ContentRef;
        error: Error;
    };
    error: true;
}
export declare const SAVE_FULFILLED = "SAVE_FULFILLED";
export interface SaveFulfilled {
    type: "SAVE_FULFILLED";
    payload: {
        contentRef: ContentRef;
        model: any;
    };
}
export declare const NEW_NOTEBOOK = "NEW_NOTEBOOK";
export interface NewNotebook {
    type: "NEW_NOTEBOOK";
    payload: {
        cwd: string;
        kernelSpec: KernelspecInfo;
        kernelRef: KernelRef;
        contentRef: ContentRef;
    };
}
export declare const UPDATE_FILE_TEXT = "UPDATE_FILE_TEXT";
export interface UpdateFileText {
    type: "UPDATE_FILE_TEXT";
    payload: {
        text: string;
        contentRef: ContentRef;
    };
}
