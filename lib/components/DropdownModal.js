"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var ModalDropdownPickerStyles_1 = require("../styles/ModalDropdownPickerStyles");
var ModalDropdownPicker = function (_a) {
    var visible = _a.visible, onConfirm = _a.onConfirm, onCancel = _a.onCancel, dropdownData = _a.dropdownData, _b = _a.layoutDirection, layoutDirection = _b === void 0 ? 'horizontal' : _b, _c = _a.isLinked, isLinked = _c === void 0 ? true : _c;
    var _d = (0, react_1.useState)([]), selections = _d[0], setSelections = _d[1];
    var _e = (0, react_1.useState)(null), openDropdown = _e[0], setOpenDropdown = _e[1];
    (0, react_1.useEffect)(function () {
        setSelections(dropdownData.map(function () { return null; }));
    }, [dropdownData]);
    var updateSelection = function (index, value) {
        var newSelections = __spreadArray([], selections, true);
        newSelections[index] = value;
        if (isLinked && index < selections.length - 1) {
            for (var j = index + 1; j < selections.length; j++) {
                newSelections[j] = null;
            }
        }
        setSelections(newSelections);
    };
    var getOptions = function (index) {
        var data = dropdownData[index];
        if (isLinked) {
            if (typeof data.options === 'object' && !Array.isArray(data.options)) {
                if (index === 0) {
                    return Object.keys(data.options);
                }
                else {
                    var parentSelection = selections[index - 1];
                    if (parentSelection &&
                        data.options[parentSelection]) {
                        return data.options[parentSelection];
                    }
                    return [];
                }
            }
            return data.options;
        }
        else {
            if (typeof data.options === 'object' && !Array.isArray(data.options)) {
                if (index === 0) {
                    return Object.keys(data.options);
                }
                else {
                    return Object.values(data.options).flat();
                }
            }
            return data.options;
        }
    };
    var isConfirmEnabled = selections.every(function (selection, index) {
        if (isLinked && index > 0 && !selections[index - 1]) {
            return false;
        }
        return selection !== null && selection !== '';
    });
    var handleConfirmPress = function () {
        if (isConfirmEnabled) {
            var aggregatedValue = selections.filter(function (s) { return s !== null; }).join(', ');
            onConfirm(aggregatedValue);
        }
    };
    return (react_1.default.createElement(react_native_1.Modal, { visible: visible, transparent: true, animationType: "fade" },
        react_1.default.createElement(react_native_1.View, { style: ModalDropdownPickerStyles_1.styles.modalOverlay },
            react_1.default.createElement(react_native_1.View, { style: ModalDropdownPickerStyles_1.styles.modalContainer },
                react_1.default.createElement(react_native_1.Text, { style: ModalDropdownPickerStyles_1.styles.titleText }, "Select Options"),
                react_1.default.createElement(react_native_1.View, { style: [
                        ModalDropdownPickerStyles_1.styles.dropdownsWrapper,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                            flexDirection: layoutDirection === 'horizontal' ? 'row' : 'column',
                        },
                    ] }, dropdownData.map(function (dropdown, index) {
                    var isDisabled = isLinked && index > 0 && !selections[index - 1];
                    return (react_1.default.createElement(react_native_1.View, { key: index, style: ModalDropdownPickerStyles_1.styles.dropdownContainer },
                        react_1.default.createElement(react_native_1.TouchableOpacity, { style: ModalDropdownPickerStyles_1.styles.dropdownButton, onPress: function () {
                                if (isDisabled) {
                                    return;
                                }
                                setOpenDropdown(openDropdown === index ? null : index);
                            } },
                            react_1.default.createElement(react_native_1.Text, { style: ModalDropdownPickerStyles_1.styles.dropdownButtonText }, selections[index] || dropdown.placeholder),
                            react_1.default.createElement(react_native_1.Text, { style: ModalDropdownPickerStyles_1.styles.arrowIndicator }, openDropdown === index ? '▲' : '▼')),
                        openDropdown === index && (react_1.default.createElement(react_native_1.View, { style: ModalDropdownPickerStyles_1.styles.dropdownOptionsContainer },
                            react_1.default.createElement(react_native_1.FlatList, { data: getOptions(index), keyExtractor: function (_, idx) { return idx.toString(); }, renderItem: function (_a) {
                                    var item = _a.item;
                                    return (react_1.default.createElement(react_native_1.Pressable, { onPress: function () {
                                            updateSelection(index, item);
                                            setOpenDropdown(null);
                                        }, style: function (_a) {
                                            var pressed = _a.pressed;
                                            return [
                                                ModalDropdownPickerStyles_1.styles.option,
                                                pressed && { backgroundColor: '#e0e0e0' },
                                            ];
                                        } },
                                        react_1.default.createElement(react_native_1.Text, { style: ModalDropdownPickerStyles_1.styles.optionText }, item)));
                                } })))));
                })),
                react_1.default.createElement(react_native_1.View, { style: ModalDropdownPickerStyles_1.styles.buttonContainer },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: ModalDropdownPickerStyles_1.styles.cancelButton, onPress: onCancel },
                        react_1.default.createElement(react_native_1.Text, { style: ModalDropdownPickerStyles_1.styles.cancelButtonText }, "Cancel")),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: ModalDropdownPickerStyles_1.styles.confirmButton, onPress: handleConfirmPress, disabled: !isConfirmEnabled },
                        react_1.default.createElement(react_native_1.Text, { style: ModalDropdownPickerStyles_1.styles.confirmButtonText }, "Confirm")))))));
};
exports.default = ModalDropdownPicker;
