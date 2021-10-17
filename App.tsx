import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button, Platform, StyleSheet, Text, View } from 'react-native';
import { AddEmployeeButton } from './components/AddEmployeeButton';
import styled from 'styled-components/native';
import { EmployeeCard } from './components/EmployeeCard';
import { ShiftModal } from './components/ShiftModal';
import { TimeTable } from './components/TimeTable';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'modal-enhanced-react-native-web';


export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  return (
    <OuterContainer>
    <Container>
      <EmployeeSection>
      <ShiftModal/>
      <Modal isVisible={isDateModalVisible} transparent={true}>
    <OuterView>
    <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </OuterView>
    </Modal>
      <EmployeeScroll>
        <EmployeeList>
        <EmployeeCard isDisabled={false} onPress={() => setDateModalVisible(true)}/>
        <EmployeeCard isDisabled={false}/>
        <EmployeeCard isDisabled={false}/>
        <EmployeeCard isDisabled={false}/>
        <EmployeeCard isDisabled={false}/>
        <EmployeeCard isDisabled={false}/>
        <EmployeeCard isDisabled={false}/>
        </EmployeeList>
        </EmployeeScroll>
      </EmployeeSection>
      <DayScheduleSection>
      <Calendar onDayPress={(day) => {}}
      />
      </DayScheduleSection>
    </Container>
    </OuterContainer>
  );
} 

const OuterView = styled.View`
    flex-direction: column;
    background-color: white;
    height: 15%;
    width: 30%;
    border-radius: 20px;
    margin: auto;
    border: solid grey 3px;
`;

const ModalContainer = styled.View`
padding-left: 10px;`;

const OuterContainer = styled.View`
height: 100%;`;

const EmployeeSection = styled.View`
border: solid black 1px;
height: 100%;
width: 20%;
padding: 10px;
`;

const DayScheduleSection = styled.View`
border: solid black 1px;
height: 100%;
width: 80%;
`;

const ModalView = styled.View`
  width: 200px;
  height: 200px;
`;

const Container = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: solid pink 2px;
`;

const EmployeeList = styled.View`
padding: 10px;
`;

const EmployeeScroll = styled.ScrollView``;

