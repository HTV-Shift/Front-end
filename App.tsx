import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { AddEmployeeButton } from './components/AddEmployeeButton';
import styled from 'styled-components/native';
import { EmployeeCard } from './components/EmployeeCard';
import { ShiftModal } from './components/ShiftModal';
import { TimeTable } from './components/TimeTable';


export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <OuterContainer>
    <Container>
      <EmployeeSection>
      <ShiftModal/>
      <EmployeeScroll>
        <EmployeeList>
        <EmployeeCard isDisabled={false}/>
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
        <TimeTable>
          
        </TimeTable>
      </DayScheduleSection>
    </Container>
    </OuterContainer>
  );
}



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

