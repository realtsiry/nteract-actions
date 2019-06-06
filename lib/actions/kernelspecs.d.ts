/**
 * @module actions
 */
import { ContentRef, KernelspecProps } from "@nteract/types";
import * as actionTypes from "../actionTypes";
export declare const fetchKernelspecs: (payload: {
    kernelspecsRef: string;
    hostRef: string;
}) => actionTypes.FetchKernelspecs;
export declare const fetchKernelspecsFulfilled: (payload: {
    kernelspecsRef: string;
    hostRef: string;
    defaultKernelName: string;
    kernelspecs: {
        [kernelspec: string]: KernelspecProps;
    };
}) => actionTypes.FetchKernelspecsFulfilled;
export declare const fetchKernelspecsFailed: (payload: {
    kernelspecsRef: string;
    error: object;
}) => actionTypes.FetchKernelspecsFailed;
export declare function setKernelspecInfo(payload: {
    kernelInfo: any;
    contentRef: ContentRef;
}): actionTypes.SetKernelspecInfo;
