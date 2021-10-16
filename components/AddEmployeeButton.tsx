import * as React from 'react';
import styled from 'styled-components/native';


export const AddEmployeeButton: React.FC = () => (<Outline>
    <Title>Add Employee</Title>
</Outline>)
    




const Outline = styled.TouchableOpacity`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px;
background-color: black;
border-radius: 10px;
`;

const Title = styled.Text`
font-family: Source Sans Pro;
font-style: normal;
color: white;
`;
