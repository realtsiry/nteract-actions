/**
 * @module actions
 */
import { BookstoreDataModel } from "@nteract/types";
import * as actionTypes from "../actionTypes";
export declare const publishToBookstore: (payload: {
    contentRef: string;
}) => actionTypes.PublishToBookstore;
export declare const publishToBookstoreAfterSave: (payload: {
    contentRef: string;
    model: BookstoreDataModel;
}) => actionTypes.PublishToBookstoreAfterSave;
export declare const publishToBookstoreSucceeded: (payload: {
    contentRef: string;
}) => actionTypes.PublishToBookstoreSucceeded;
export declare const publishToBookstoreFailed: (payload: {
    contentRef: string;
    error: Error;
}) => actionTypes.PublishToBookstoreFailed;
