import * as React from 'react';
import styled from 'styled-components/native';

export const EmployeeCard: React.FC = () => (
    <Card>
        <InnerContainer>
            <PictureContainer>
                <AvatarBorder>AA</AvatarBorder>
            </PictureContainer>
            <TextContainer>
                <EmployeeName>Hello</EmployeeName>
                <Subtext>Available</Subtext>
            </TextContainer>
        </InnerContainer>
    </Card>
);


const Card = styled.TouchableOpacity`
    border: solid grey 1px;
    flex-direction: column;
`;

const InnerContainer = styled.View`
    flex-direction: row;
    padding: 5px;
`;

const PictureContainer = styled.View`
    flex-direction: row;
    width: 20%;
`;
const TextContainer = styled.View`
    flex-direction: column;
    width: 80%;
    padding-left: 12px;
`; 

const EmployeeName = styled.Text`
    font-size: 15px;
`;

const Subtext = styled.Text`
    font-size: 10px;
`;

const AvatarBorder = styled.Text`
flex: 1;
flex-direction: row;
border: solid black 1px;
text-align: center;
padding-top: 4px;
border-radius: 999px;`;