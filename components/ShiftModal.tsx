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
          </UpperContainer>
          <MiddleContainer>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
          </MiddleContainer>
          <Close onPress={() => setModalVisible(false)}>
        <Text>Hide Modal</Text>
        </Close>
        </OuterView>
      </Modal>
      </>
    );
};


const OuterView = styled.View`
    flex-direction: column;
    background-color: white;
    height: 70%;
    width: 60%;
    border-radius: 20px;
    margin: auto;
    border: solid grey 3px;
`;

const UpperContainer = styled.View`
    flex-direction: row:
    margin: auto;
    padding: 10px;
    justify-content: center;
    border: solid black 1px;
`;

const MiddleContainer = styled.View`
    flex-direction: row;
    margin: auto;
    padding: 10px;
    justify-content: center;
    border: solid black 1px;
    width: 100%;
`;

const NameField = styled.Text`
margin: auto;`;

const Close =  styled.TouchableHighlight``;