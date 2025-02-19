export type DropdownData = {
    placeholder: string;
    options: string[] | Record<string, string[]>;
    ordered?: boolean;
};
export type ModalDropdownPickerProps = {
    visible: boolean;
    onConfirm: (value: string) => void;
    onCancel: () => void;
    dropdownData: DropdownData[];
    layoutDirection?: 'horizontal' | 'vertical';
    isLinked?: boolean;
};
