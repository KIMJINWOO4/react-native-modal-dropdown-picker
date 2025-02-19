import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    maxHeight: 400,
    width: width * 0.8,
  },
  titleText: {
    fontSize: 24,
    color: '#3E3E3E',
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    textAlign: 'center',
  },
  dropdownsWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    position: 'relative',
  },
  dropdownButton: {
    height: 40,
    backgroundColor: '#fafafa',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownButtonText: {
    fontSize: 13,
    flex: 1,
  },
  arrowIndicator: {
    fontSize: 16,
    textAlign: 'center',
    width: 20,
  },
  dropdownOptionsContainer: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    zIndex: 1000,
    maxHeight: 150,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 13,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#28a745',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});
