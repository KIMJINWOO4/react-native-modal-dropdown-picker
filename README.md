# React-Native-Modal-Dropdown-Picker ✨

[![npm version](https://img.shields.io/npm/v/react-native-modal-dropdown-picker.svg)](https://www.npmjs.com/package/react-native-modal-dropdown-picker)  [![npm downloads](https://img.shields.io/npm/dm/react-native-modal-dropdown-picker.svg)](https://www.npmjs.com/package/react-native-modal-dropdown-picker)  [![License: MIT](https://img.shields.io/npm/l/react-native-modal-dropdown-picker.svg)](https://github.com/KIMJINWOO4/react-native-modal-dropdown-picker/blob/main/LICENSE)

A customizable React Native modal dropdown picker component that lets you easily display one or more dropdown pickers inside a modal. Configure linked dropdowns (where the options of a second picker depend on the first) or independent dropdowns with a rich set of customization options. Perfect for building dynamic forms and interactive UIs!


# Simple Example

Below are three demo examples demonstrating the Modal Dropdown Picker in action:

| Single Dropdown Example                                                    | Two Linked Dropdowns Example                                               | Two Unlinked Dropdowns Example                                             |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| ![Single Dropdown](https://github.com/user-attachments/assets/d170c6e2-6a44-44e3-b61e-97ce968ed7c9) | ![Linked Dropdowns](https://github.com/user-attachments/assets/64ec92f9-4c95-4e12-a5ec-081241d04c58) | ![Unlinked Dropdowns](https://github.com/user-attachments/assets/3067503d-255d-4e04-a051-7d9137d32f53) |


# Features

- **Multiple Modes**  
  Use a single dropdown picker, two linked dropdowns (where the second's options depend on the first), or two independent dropdowns.

- **Linked Dropdowns**  
  Easily configure cascading options. For example, selecting a state in the first dropdown dynamically populates the cities in the second dropdown.

- **Customizable UI**  
  Comes with a set of default styles that can be overridden via props to match your app’s theme.

- **Smooth Animations**  
  Enjoy smooth open/close animations for a crisp, modern interface.

- **Strict Selection Handling**  
  In linked mode, prevent users from interacting with a dropdown until a selection has been made in the previous one.

- **Modal Isolation**  
  When the modal is active, tapping outside the modal does not dismiss it. This ensures that users stay focused on completing the required selections.


# Installation

Install via npm:

```bash
npm install react-native-modal-dropdown-picker
```

Or using Yarn:

```bash
yarn add react-native-modal-dropdown-picker
```

# How To Use
Below are demo examples of how to integrate and use the Modal Dropdown Picker component in your React Native project.

## 1. Single Dropdown Picker Example
This example demonstrates a modal with a single dropdown picker.
```ts
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalDropdownPicker, { DropdownData } from 'react-native-modal-dropdown-picker';

const singleDropdownData: DropdownData[] = [
  {
    placeholder: 'Select Food',
    options: {
      'Food 1': ['food 1'],
      'Food 2': ['food 2'],
      'Food 3': ['food 3'],
    },
  },
];

const SingleDropdownExample: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Modal Dropdown Picker</Text>
      </TouchableOpacity>
      <Text>Selected: {selectedValue}</Text>
      <ModalDropdownPicker
        visible={modalVisible}
        onConfirm={(value: string) => {
          setSelectedValue(value);
          setModalVisible(false);
        }}
        onCancel={() => setModalVisible(false)}
        dropdownData={singleDropdownData}
        layoutDirection="horizontal"
      />
    </View>
  );
};

export default SingleDropdownExample;
```

## 2. Two Linked Dropdown Pickers Example
This example demonstrates a modal with two linked dropdowns.

The second dropdown’s options depend on the selection of the first.
```ts
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalDropdownPicker, { DropdownData } from 'react-native-modal-dropdown-picker';

const linkedDropdownData: DropdownData[] = [
  {
    placeholder: 'Select Food',
    options: {
      'New York': ['New York'],
      California: ['California'],
      Texas: ['Texas'],
    },
  },
  {
    placeholder: 'Select City',
    options: {
      'New York': ['New York City', 'Buffalo', 'Rochester'],
      California: ['Los Angeles', 'San Francisco', 'San Diego'],
      Texas: ['Houston', 'Dallas', 'Austin'],
    },
  },
];

const LinkedDropdownExample: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Linked Dropdown Picker</Text>
      </TouchableOpacity>
      <Text>Selected: {selectedValue}</Text>
      <ModalDropdownPicker
        visible={modalVisible}
        onConfirm={(value: string) => {
          setSelectedValue(value);
          setModalVisible(false);
        }}
        onCancel={() => setModalVisible(false)}
        dropdownData={linkedDropdownData}
        layoutDirection="horizontal"
        isLinked={true}
      />
    </View>
  );
};

export default LinkedDropdownExample;
```

## 3. Two Unlinked Dropdown Pickers Example
This example demonstrates a modal with two independent dropdowns that function separately.
```ts
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalDropdownPicker, { DropdownData } from 'react-native-modal-dropdown-picker';

const unlinkedDropdownData: DropdownData[] = [
  {
    placeholder: 'Select State',
    options: {
      'New York': ['New York'],
      California: ['California'],
      Texas: ['Texas'],
    },
  },
  {
    placeholder: 'Select Menu',
    options: {
      Food: ['F1', 'F2', 'F3', 'F4'],
    },
  },
];

const UnlinkedDropdownExample: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Unlinked Dropdown Picker</Text>
      </TouchableOpacity>
      <Text style={styles.selectedText}>Selected: {selectedValue}</Text>
      <ModalDropdownPicker
        visible={modalVisible}
        onConfirm={(value: string) => {
          setSelectedValue(value);
          setModalVisible(false);
        }}
        onCancel={() => setModalVisible(false)}
        dropdownData={unlinkedDropdownData}
        layoutDirection="horizontal"
        isLinked={false}
      />
    </View>
  );
};

export default UnlinkedDropdownExample;
```

# API Reference

## Props

- **visible**: `boolean`  
  Determines whether the modal is visible.

- **onConfirm**: `(value: string) => void`  
  Callback that receives the aggregated string of selected options when the Confirm button is pressed.

- **onCancel**: `() => void`  
  Callback executed when the Cancel button is pressed.

- **dropdownData**: `DropdownData[]`  
  An array of dropdown objects. Each object includes:
  - **placeholder**: `string` – The default text displayed when no selection is made.
  - **options**: `string[] | Record<string, string[]>` –  
    - For independent dropdowns: an array of options.  
    - For linked dropdowns: an object mapping keys to arrays of options.
  - **ordered**: `boolean` (optional) – Indicates whether the dropdown options should be rendered in a specific order.

- **layoutDirection**: `'horizontal' | 'vertical'`  
  Specifies how the dropdowns are arranged within the modal. Defaults to `'horizontal'`.

- **isLinked**: `boolean`  
  - If `true`, the dropdowns are linked (i.e., the options of subsequent dropdowns depend on previous selections).  
  - If `false`, each dropdown functions independently. Defaults to `true`.

---

# Types

Below are examples of the different `DropdownData` configurations you can pass to the component:

## Example 1: Single Dropdown Picker

```ts
const dropdownData: DropdownData[] = [
  {
    placeholder: 'Select Food',
    options: {
      'Food 1': ['food 1'],
      'Food 2': ['food 2'],
      'Food 3': ['food 3'],
    },
  },
];
```

## Example 2: Two Linked Dropdown Pickers (isLinked = true)
```ts
const dropdownData: DropdownData[] = [
  {
    placeholder: 'Select Food',
    options: {
      'New York': ['New York'],
      California: ['California'],
      Texas: ['Texas'],
    },
  },
  {
    placeholder: 'Select City',
    options: {
      'New York': ['New York City', 'Buffalo', 'Rochester'],
      California: ['Los Angeles', 'San Francisco', 'San Diego'],
      Texas: ['Houston', 'Dallas', 'Austin'],
    },
  },
];
```

## Example 3: Two Unlinked Dropdown Pickers (isLinked = false)
```ts
const dropdownData: DropdownData[] = [
  {
    placeholder: 'Select State',
    options: {
      'New York': ['New York'],
      California: ['California'],
      Texas: ['Texas'],
    },
  },
  {
    placeholder: 'Select Menu',
    options: {
      Food: ['F1', 'F2', 'F3', 'F4'],
    },
  },
];
```

Note: We recognize that using a single dropdown picker might feel a bit cumbersome. 

Our goal is to keep the package lightweight while providing essential features. 

If you have any ideas for improvements or additional features, please feel free to submit an issue or a pull request.😊

# Contributing
Contributions are very welcome!

If you have ideas for improvements, bug fixes, or new features, please feel free to submit an issue or a pull request on [GitHub](https://github.com/KIMJINWOO4/react-native-modal-dropdown-picker). 


You can also leave your feedback via issues. Let's build something awesome together! 🎉

# License


This project is licensed under the MIT License.

