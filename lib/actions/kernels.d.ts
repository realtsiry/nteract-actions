/**
 * @module actions
 */
import { ContentRef, KernelInfo, KernelRef, LocalKernelProps, RemoteKernelProps } from "@nteract/types";
import { ExecuteRequest } from "@nteract/messaging";
import * as actionTypes from "../actionTypes";
export declare function launchKernelFailed(payload: {
    error: Error;
    kernelRef?: KernelRef;
    contentRef?: ContentRef;
}): actionTypes.LaunchKernelFailed;
export declare function launchKernelSuccessful(payload: {
    kernel: LocalKernelProps | RemoteKernelProps;
    kernelRef: KernelRef;
    contentRef: ContentRef;
    selectNextKernel: boolean;
}): actionTypes.NewKernelAction;
export declare function launchKernel(payload: {
    kernelSpec: any;
    cwd: string;
    kernelRef: KernelRef;
    selectNextKernel: boolean;
    contentRef: ContentRef;
}): actionTypes.LaunchKernelAction;
export declare function changeKernelByName(payload: {
    kernelSpecName: any;
    oldKernelRef?: KernelRef | null;
    contentRef: ContentRef;
}): actionTypes.ChangeKernelByName;
export declare function launchKernelByName(payload: {
    kernelSpecName: any;
    cwd: string;
    kernelRef: KernelRef;
    selectNextKernel: boolean;
    contentRef: ContentRef;
}): actionTypes.LaunchKernelByNameAction;
export declare function kernelRawStdout(payload: {
    text: string;
    kernelRef: KernelRef;
}): actionTypes.KernelRawStdout;
export declare function kernelRawStderr(payload: {
    text: string;
    kernelRef: KernelRef;
}): actionTypes.KernelRawStderr;
export declare function killKernel(payload: {
    restarting: boolean;
    kernelRef?: KernelRef | null;
}): actionTypes.KillKernelAction;
export declare function killKernelFailed(payload: {
    error: Error;
    kernelRef?: KernelRef | null;
}): actionTypes.KillKernelFailed;
export declare function killKernelSuccessful(payload: {
    kernelRef?: KernelRef | null;
}): actionTypes.KillKernelSuccessful;
export declare function interruptKernel(payload: {
    kernelRef?: KernelRef | null;
}): actionTypes.InterruptKernel;
export declare function interruptKernelSuccessful(payload: {
    kernelRef?: KernelRef | null;
}): actionTypes.InterruptKernelSuccessful;
export declare function interruptKernelFailed(payload: {
    error: Error;
    kernelRef?: KernelRef | null;
}): actionTypes.InterruptKernelFailed;
export declare function restartKernel(payload: {
    outputHandling: actionTypes.RestartKernelOutputHandling;
    kernelRef?: KernelRef | null;
    contentRef: ContentRef;
}): actionTypes.RestartKernel;
export declare function restartKernelFailed(payload: {
    error: Error;
    kernelRef: KernelRef;
    contentRef: ContentRef;
}): actionTypes.RestartKernelFailed;
export declare function restartKernelSuccessful(payload: {
    kernelRef: KernelRef;
    contentRef: ContentRef;
}): actionTypes.RestartKernelSuccessful;
export declare function sendExecuteRequest(payload: {
    id: string;
    message: ExecuteRequest;
    contentRef: ContentRef;
}): actionTypes.SendExecuteRequest;
export declare function executeCell(payload: {
    id: string;
    contentRef: ContentRef;
}): actionTypes.ExecuteCell;
export declare function executeAllCells(payload: {
    contentRef: ContentRef;
}): actionTypes.ExecuteAllCells;
export declare function executeAllCellsBelow(payload: {
    contentRef: ContentRef;
}): actionTypes.ExecuteAllCellsBelow;
export declare function executeFocusedCell(payload: {
    contentRef: ContentRef;
}): actionTypes.ExecuteFocusedCell;
export declare function executeCanceled(payload: {
    id: string;
    contentRef: ContentRef;
}): actionTypes.ExecuteCanceled;
export declare function executeFailed(payload: {
    error: Error;
    contentRef?: ContentRef;
}): actionTypes.ExecuteFailed;
export declare function deleteConnectionFileFailed(payload: {
    error: Error;
    kernelRef: KernelRef;
}): actionTypes.DeleteConnectionFileFailedAction;
export declare function deleteConnectionFileSuccessful(payload: {
    kernelRef: KernelRef;
}): actionTypes.DeleteConnectionFileSuccessfulAction;
export declare function shutdownReplySucceeded(payload: {
    content: {
        restart: boolean;
    };
    kernelRef: KernelRef;
}): actionTypes.ShutdownReplySucceeded;
export declare function shutdownReplyTimedOut(payload: {
    error: Error;
    kernelRef: KernelRef;
}): actionTypes.ShutdownReplyTimedOut;
export declare function setKernelInfo(payload: {
    kernelRef: KernelRef;
    info: KernelInfo;
}): actionTypes.SetKernelInfo;
