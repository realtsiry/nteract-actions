/**
 * @module actions
 */
import { CellId, JSONObject, MediaBundle, OnDiskOutput } from "@nteract/commutable";
import { ContentRef, HeaderDataProps, KernelRef, LanguageInfoMetadata, PayloadMessage } from "@nteract/types";
import * as actionTypes from "../actionTypes";
export * from "./cells";
export * from "./contents";
export * from "./hosts";
export * from "./kernels";
export * from "./kernelspecs";
export declare const openModal: (payload: {
    modalType: string;
}) => {
    type: string;
    payload: {
        modalType: string;
    };
};
export declare const closeModal: () => {
    type: string;
};
export declare const addHost: (payload: {
    hostRef: string;
    host: {
        id?: string | null | undefined;
        type: "jupyter" | "local";
        defaultKernelName: string;
        token?: string | null | undefined;
        serverUrl?: string | undefined;
        crossDomain?: boolean | null | undefined;
    };
}) => {
    type: string;
    payload: {
        hostRef: string;
        host: {
            id?: string | null | undefined;
            type: "jupyter" | "local";
            defaultKernelName: string;
            token?: string | null | undefined;
            serverUrl?: string | undefined;
            crossDomain?: boolean | null | undefined;
        };
    };
};
export declare const removeHost: (payload: {
    hostRef: string;
}) => {
    type: string;
    payload: {
        hostRef: string;
    };
};
export declare function overwriteMetadataField(payload: {
    field: string;
    value: any;
    contentRef: ContentRef;
}): actionTypes.OverwriteMetadataField;
export declare function overwriteMetadataFields(payload: Partial<HeaderDataProps> & Partial<{
    contentRef: ContentRef;
}>): actionTypes.OverwriteMetadataFields;
export declare function deleteMetadataField(payload: {
    field: string;
    contentRef: ContentRef;
}): actionTypes.DeleteMetadataField;
export declare function setNotificationSystem(notificationSystem: any): actionTypes.SetNotificationSystemAction;
export declare function setGithubToken(githubToken: string): actionTypes.SetGithubTokenAction;
export declare function setConfigAtKey<T>(key: string, value: T): actionTypes.SetConfigAction<T>;
export declare function setTheme(theme: string): actionTypes.SetConfigAction<string>;
export declare function setCursorBlink(value: string): actionTypes.SetConfigAction<string>;
export declare function toggleOutputExpansion(payload: {
    id: string;
    contentRef: ContentRef;
}): actionTypes.ToggleCellExpansion;
export declare const loadConfig: () => {
    type: string;
};
export declare const saveConfig: () => {
    type: string;
};
export declare const doneSavingConfig: () => {
    type: string;
};
interface ConfigPayload {
    config: {
        [key: string]: string;
        theme: string;
    };
}
export declare const configLoaded: (payload: ConfigPayload) => actionTypes.MergeConfigAction;
/**
 * Action creator for comm_open messages
 * @param  {jmp.Message} a comm_open message
 * @return {Object}      COMM_OPEN action
 */
export declare function commOpenAction(message: any): {
    type: string;
    data: any;
    metadata: any;
    comm_id: any;
    target_name: any;
    target_module: any;
    buffers: any;
};
/**
 * Action creator for comm_msg messages
 * @param  {jmp.Message} a comm_msg
 * @return {Object}      COMM_MESSAGE action
 */
export declare function commMessageAction(message: any): {
    type: string;
    comm_id: any;
    data: any;
    buffers: any;
};
export declare function appendOutput(payload: {
    id: CellId;
    output: OnDiskOutput;
    contentRef: ContentRef;
}): actionTypes.AppendOutput;
export declare function acceptPayloadMessage(payload: {
    id: CellId;
    payload: PayloadMessage;
    contentRef: ContentRef;
}): actionTypes.AcceptPayloadMessage;
export declare function updateDisplay(payload: {
    content: {
        data: MediaBundle;
        metadata: JSONObject;
        transient: {
            display_id: string;
        };
    };
    contentRef: ContentRef;
}): actionTypes.UpdateDisplay;
export declare function updateDisplayFailed(payload: {
    error: Error;
    contentRef: ContentRef;
}): actionTypes.UpdateDisplayFailed;
export declare function setLanguageInfo(payload: {
    langInfo: LanguageInfoMetadata;
    kernelRef: KernelRef;
    contentRef: ContentRef;
}): actionTypes.SetLanguageInfo;
export declare function publishGist(payload: {
    contentRef: ContentRef;
}): actionTypes.PublishGist;
export declare function removeTransform(payload: actionTypes.RemoveTransform["payload"]): actionTypes.RemoveTransform;
export declare function addTransform(payload: actionTypes.AddTransform["payload"]): actionTypes.AddTransform;
export declare function coreError(payload: Error): actionTypes.CoreError;
