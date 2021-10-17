import * as React from 'react';
import styled from 'styled-components/native';
import Modal from 'modal-enhanced-react-native-web';

export interface IDropDownPickerProps {
    isVisible: boolean;
}

export const DropDownPicker: React.FC<IDropDownPickerProps> = ({
    isVisible,
    ...props
}) => {
return (
    <Modal isVisible={isVisible} transparent={true} {...props}>
    <OuterView>
    </OuterView>
    </Modal>
);
};

const OuterView = styled.View`
    flex-direction: column;
    background-color: white;
    height: 15%;
    width: 30%;
    border-radius: 20px;
    margin: auto;
    border: solid grey 3px;
`;