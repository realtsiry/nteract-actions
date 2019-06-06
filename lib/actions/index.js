"use strict";
/**
 * @module actions
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Local modules
const actionTypes = __importStar(require("../actionTypes"));
__export(require("./cells"));
__export(require("./contents"));
__export(require("./hosts"));
__export(require("./kernels"));
__export(require("./kernelspecs"));
exports.openModal = (payload) => ({
    type: actionTypes.OPEN_MODAL,
    payload
});
exports.closeModal = () => ({
    type: actionTypes.CLOSE_MODAL
});
exports.addHost = (payload) => ({
    type: actionTypes.ADD_HOST,
    payload
});
exports.removeHost = (payload) => ({
    type: actionTypes.REMOVE_HOST,
    payload
});
function overwriteMetadataField(payload) {
    return {
        type: actionTypes.OVERWRITE_METADATA_FIELD,
        payload
    };
}
exports.overwriteMetadataField = overwriteMetadataField;
function overwriteMetadataFields(payload) {
    return {
        type: actionTypes.OVERWRITE_METADATA_FIELDS,
        payload
    };
}
exports.overwriteMetadataFields = overwriteMetadataFields;
function deleteMetadataField(payload) {
    return {
        type: actionTypes.DELETE_METADATA_FIELD,
        payload
    };
}
exports.deleteMetadataField = deleteMetadataField;
function setNotificationSystem(notificationSystem) {
    return {
        type: actionTypes.SET_NOTIFICATION_SYSTEM,
        payload: {
            notificationSystem
        }
    };
}
exports.setNotificationSystem = setNotificationSystem;
function setGithubToken(githubToken) {
    return {
        type: actionTypes.SET_GITHUB_TOKEN,
        payload: {
            githubToken
        }
    };
}
exports.setGithubToken = setGithubToken;
function setConfigAtKey(key, value) {
    return {
        type: actionTypes.SET_CONFIG_AT_KEY,
        payload: {
            key,
            value
        }
    };
}
exports.setConfigAtKey = setConfigAtKey;
function setTheme(theme) {
    return setConfigAtKey("theme", theme);
}
exports.setTheme = setTheme;
function setCursorBlink(value) {
    return setConfigAtKey("cursorBlinkRate", value);
}
exports.setCursorBlink = setCursorBlink;
function toggleOutputExpansion(payload) {
    return {
        type: actionTypes.TOGGLE_OUTPUT_EXPANSION,
        payload
    };
}
exports.toggleOutputExpansion = toggleOutputExpansion;
exports.loadConfig = () => ({ type: actionTypes.LOAD_CONFIG });
exports.saveConfig = () => ({ type: actionTypes.SAVE_CONFIG });
exports.doneSavingConfig = () => ({
    type: actionTypes.DONE_SAVING_CONFIG
});
exports.configLoaded = (payload) => ({
    payload,
    type: actionTypes.MERGE_CONFIG
});
/**
 * Action creator for comm_open messages
 * @param  {jmp.Message} a comm_open message
 * @return {Object}      COMM_OPEN action
 */
function commOpenAction(message) {
    // invariant: expects a comm_open message
    return {
        type: actionTypes.COMM_OPEN,
        data: message.content.data,
        metadata: message.content.metadata,
        comm_id: message.content.comm_id,
        target_name: message.content.target_name,
        target_module: message.content.target_module,
        // Pass through the buffers
        buffers: message.blob || message.buffers
        // NOTE: Naming inconsistent between jupyter notebook and jmp
        //       see https://github.com/n-riesco/jmp/issues/14
        //       We just expect either one
    };
}
exports.commOpenAction = commOpenAction;
/**
 * Action creator for comm_msg messages
 * @param  {jmp.Message} a comm_msg
 * @return {Object}      COMM_MESSAGE action
 */
function commMessageAction(message) {
    return {
        type: actionTypes.COMM_MESSAGE,
        comm_id: message.content.comm_id,
        data: message.content.data,
        // Pass through the buffers
        buffers: message.blob || message.buffers
        // NOTE: Naming inconsistent between jupyter notebook and jmp
        //       see https://github.com/n-riesco/jmp/issues/14
        //       We just expect either one
    };
}
exports.commMessageAction = commMessageAction;
function appendOutput(payload) {
    return {
        type: actionTypes.APPEND_OUTPUT,
        payload
    };
}
exports.appendOutput = appendOutput;
function acceptPayloadMessage(payload) {
    return {
        type: actionTypes.ACCEPT_PAYLOAD_MESSAGE,
        payload
    };
}
exports.acceptPayloadMessage = acceptPayloadMessage;
function updateDisplay(payload) {
    return {
        type: actionTypes.UPDATE_DISPLAY,
        payload
    };
}
exports.updateDisplay = updateDisplay;
function updateDisplayFailed(payload) {
    return {
        type: actionTypes.UPDATE_DISPLAY_FAILED,
        payload,
        error: true
    };
}
exports.updateDisplayFailed = updateDisplayFailed;
function setLanguageInfo(payload) {
    return {
        type: actionTypes.SET_LANGUAGE_INFO,
        payload
    };
}
exports.setLanguageInfo = setLanguageInfo;
function publishGist(payload) {
    return {
        type: actionTypes.PUBLISH_GIST,
        payload
    };
}
exports.publishGist = publishGist;
function removeTransform(payload) {
    return {
        type: actionTypes.REMOVE_TRANSFORM,
        payload
    };
}
exports.removeTransform = removeTransform;
function addTransform(payload) {
    return {
        type: actionTypes.ADD_TRANSFORM,
        payload
    };
}
exports.addTransform = addTransform;
function coreError(payload) {
    return {
        type: "CORE/ERROR",
        payload,
        error: true
    };
}
exports.coreError = coreError;
