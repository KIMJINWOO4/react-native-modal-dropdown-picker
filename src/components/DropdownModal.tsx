import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import {ModalDropdownPickerProps} from '../types/ModalDropdownPickerTypes';
import {styles} from '../styles/ModalDropdownPickerStyles';

const ModalDropdownPicker: React.FC<ModalDropdownPickerProps> = ({
  visible,
  onConfirm,
  onCancel,
  dropdownData,
  layoutDirection = 'horizontal',
  isLinked = true,
}) => {
  const [selections, setSelections] = useState<(string | null)[]>([]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    setSelections(dropdownData.map(() => null));
  }, [dropdownData]);

  const updateSelection = (index: number, value: string) => {
    const newSelections = [...selections];
    newSelections[index] = value;
    if (isLinked && index < selections.length - 1) {
      for (let j = index + 1; j < selections.length; j++) {
        newSelections[j] = null;
      }
    }
    setSelections(newSelections);
  };

  const getOptions = (index: number): string[] => {
    const data = dropdownData[index];
    if (isLinked) {
      if (typeof data.options === 'object' && !Array.isArray(data.options)) {
        if (index === 0) {
          return Object.keys(data.options);
        } else {
          const parentSelection = selections[index - 1];
          if (
            parentSelection &&
            (data.options as Record<string, string[]>)[parentSelection]
          ) {
            return (data.options as Record<string, string[]>)[parentSelection];
          }
          return [];
        }
      }
      return data.options as string[];
    } else {
      if (typeof data.options === 'object' && !Array.isArray(data.options)) {
        if (index === 0) {
          return Object.keys(data.options);
        } else {
          return Object.values(data.options).flat();
        }
      }
      return data.options as string[];
    }
  };

  const isConfirmEnabled = selections.every((selection, index) => {
    if (isLinked && index > 0 && !selections[index - 1]) {
      return false;
    }
    return selection !== null && selection !== '';
  });

  const handleConfirmPress = () => {
    if (isConfirmEnabled) {
      const aggregatedValue = selections.filter(s => s !== null).join(', ');
      onConfirm(aggregatedValue);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>Select Options</Text>
          <View
            style={[
              styles.dropdownsWrapper,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                flexDirection:
                  layoutDirection === 'horizontal' ? 'row' : 'column',
              },
            ]}>
            {dropdownData.map((dropdown, index) => {
              const isDisabled =
                isLinked && index > 0 && !selections[index - 1];
              return (
                <View key={index} style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={() => {
                      if (isDisabled) {
                        return;
                      }
                      setOpenDropdown(openDropdown === index ? null : index);
                    }}>
                    <Text style={styles.dropdownButtonText}>
                      {selections[index] || dropdown.placeholder}
                    </Text>
                    <Text style={styles.arrowIndicator}>
                      {openDropdown === index ? '▲' : '▼'}
                    </Text>
                  </TouchableOpacity>
                  {openDropdown === index && (
                    <View style={styles.dropdownOptionsContainer}>
                      <FlatList
                        data={getOptions(index)}
                        keyExtractor={(_, idx) => idx.toString()}
                        renderItem={({item}) => (
                          <Pressable
                            onPress={() => {
                              updateSelection(index, item);
                              setOpenDropdown(null);
                            }}
                            style={({pressed}) => [
                              styles.option,
                              pressed && {backgroundColor: '#e0e0e0'},
                            ]}>
                            <Text style={styles.optionText}>{item}</Text>
                          </Pressable>
                        )}
                      />
                    </View>
                  )}
                </View>
              );
            })}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmPress}
              disabled={!isConfirmEnabled}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDropdownPicker;
