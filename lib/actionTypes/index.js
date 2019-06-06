"use strict";
/**
 * @module actions
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./cells"));
__export(require("./contents"));
__export(require("./hosts"));
__export(require("./kernels"));
__export(require("./kernelspecs"));
exports.OVERWRITE_METADATA_FIELDS = "CORE/OVERWRITE_METADATA_FIELDS";
exports.OPEN_MODAL = "CORE/OPEN_MODAL";
exports.CLOSE_MODAL = "CORE/CLOSE_MODAL";
exports.ADD_HOST = "CORE/ADD_HOST";
exports.REMOVE_HOST = "CORE/REMOVE_HOST";
exports.SET_APP_HOST = "SET_APP_HOST";
exports.CHANGE_FILENAME = "CHANGE_FILENAME";
exports.APPEND_OUTPUT = "APPEND_OUTPUT";
exports.UPDATE_DISPLAY = "UPDATE_DISPLAY";
exports.UPDATE_DISPLAY_FAILED = "UPDATE_DISPLAY_FAILED";
exports.ACCEPT_PAYLOAD_MESSAGE = "ACCEPT_PAYLOAD_MESSAGE";
exports.SET_LANGUAGE_INFO = "SET_LANGUAGE_INFO";
exports.OVERWRITE_METADATA_FIELD = "OVERWRITE_METADATA_FIELD";
exports.DELETE_METADATA_FIELD = "DELETE_METADATA_FIELD";
exports.REGISTER_COMM_TARGET = "REGISTER_COMM_TARGET";
exports.COMM_OPEN = "COMM_OPEN";
exports.COMM_MESSAGE = "COMM_MESSAGE";
exports.SET_CONFIG_AT_KEY = "SET_CONFIG_AT_KEY";
exports.MERGE_CONFIG = "MERGE_CONFIG";
exports.LOAD_CONFIG = "LOAD_CONFIG";
exports.SAVE_CONFIG = "SAVE_CONFIG";
exports.DONE_SAVING_CONFIG = "DONE_SAVING_CONFIG";
exports.TOGGLE_OUTPUT_EXPANSION = "TOGGLE_OUTPUT_EXPANSION";
exports.SET_EXECUTION_STATE = "SET_EXECUTION_STATE";
exports.SET_NOTIFICATION_SYSTEM = "SET_NOTIFICATION_SYSTEM";
exports.SET_GITHUB_TOKEN = "SET_GITHUB_TOKEN";
exports.PUBLISH_GIST = "CORE/PUBLISH_GIST";
exports.ADD_TRANSFORM = "ADD_TRANSFORM";
exports.REMOVE_TRANSFORM = "REMOVE_TRANSFORM";
exports.ERROR = "CORE/ERROR";
