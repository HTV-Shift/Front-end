import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { EmployeeCard } from './EmployeeCard';


export const TimeTable: React.FC = () => {
    return (
        <Container>
        <ScrollableContainer>
        <OuterContainer>
            <EmployeeCard />
            <EmployeeCard />
        </OuterContainer>
        </ScrollableContainer>
        </Container>
    );
};



const OuterContainer = styled.View`
    flex-direction: column;
    background-color: white;
    border: solid black 1px;
`;

const ScrollableContainer = styled(ScrollView).attrs(() => ({
    contentContainerStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    showsVerticalScrollIndicator: true,
    persistentScrollbar: true,
  }))`
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 3px;
    border: 1px;
    border-radius: 10px;
  `;

const Container =  styled.View`
`;