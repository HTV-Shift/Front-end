import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { AddEmployeeButton } from './AddEmployeeButton';
import Modal from 'modal-enhanced-react-native-web';
import styled from 'styled-components/native';
import { EmployeeCard } from './EmployeeCard';
import DropDownPicker from 'react-native-dropdown-picker';




export const ShiftModal: React.FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
    return(
        <>
    <AddEmployeeButton onPress={() => setModalVisible(true)}/>
    <Modal transparent={true} visible={isModalVisible}>
        <OuterView>
          <UpperContainer>
              <Text>Name:</Text>
              <NameInputContainer>
              <NameInput/>
              </NameInputContainer>
          </UpperContainer>
          <MiddleContainer>
          <Close onPress={() => setModalVisible(false)}>
        <Text>Submit</Text>
        </Close>
          </MiddleContainer>
          
        </OuterView>
      </Modal>
      </>
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

const UpperContainer = styled.View`
    flex-direction: row:
    margin: auto;
    padding: 10px;
    justify-content: center;
`;

const MiddleContainer = styled.View`
    flex-direction: row;
    margin: auto;
    padding: 10px;
    justify-content: center;
    width: 100%;
`;

const NameField = styled.Text`
margin: auto;`;

const NameInputContainer = styled.View`
    border:solid black 1px;
    border-radius: 10px;
`;

const NameInput = styled.TextInput`
border-radius: 10px;
`;

const Close =  styled.TouchableHighlight``;