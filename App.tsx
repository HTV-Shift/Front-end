import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddEmployeeButton } from './components/AddEmployeeButton';
import styled from 'styled-components/native';
import { EmployeeCard } from './components/EmployeeCard';

export default function App() {
  return (
    <Container>
      <EmployeeSection>
        <EmployeeCard></EmployeeCard>
      </EmployeeSection>
      <DayScheduleSection>
      </DayScheduleSection>
      
    </Container>
  );
}


const EmployeeSection = styled.View`
border: solid black 1px;
height: 100%;
width: 30%;
`;

const DayScheduleSection = styled.View`
border: solid black 1px;
height: 100%;
width: 70%;
`;


const Container = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: solid pink 2px;
`;
