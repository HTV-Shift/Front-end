import * as React from 'react';
import styled from 'styled-components/native';
import { AddEmployeeButton } from './AddEmployeeButton';


export interface IBottomModalProps {
  title: string;
  isModalVisible: boolean;
  onPressBackground: () => void;
  isSecondaryButtonVisible?: boolean;
  secondaryButtonTitle?: string;
  onPressSecondaryButton?: () => void;
}

export const BottomModal: React.FC<IBottomModalProps> = ({
  title,
  isModalVisible,
  onPressBackground,
  isSecondaryButtonVisible = false,
  secondaryButtonTitle,
  onPressSecondaryButton,
  ...props
}) => (
  <MainModal transparent={true} visible={isModalVisible}>
    <CenterView onPress={onPressBackground}>
      <ModalContent>
        <ModalHeader>
          {!!isSecondaryButtonVisible && (
            <SecondaryButtonContainer>
              <AddEmployeeButton
                onPress={() => onPressSecondaryButton}>
                {secondaryButtonTitle}
              </AddEmployeeButton>
            </SecondaryButtonContainer>
          )}
          <TitleContainer>
            <TitleText>{title}</TitleText>
          </TitleContainer>
        </ModalHeader>
        {props.children}
      </ModalContent>
    </CenterView>
  </MainModal>
);

const TouchArea = styled.TouchableOpacity``;

const MainModal = styled.Modal`
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const CenterView = styled.Pressable`
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: 'rgba(0, 0, 0, 0.3)';
`;

const ModalContent = styled.Pressable`
  flex-direction: column;
  background-color: white;
  width: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-bottom: 20px;
  height: 300px;
  justify-content: center;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 20px;
  padding-bottom: 0px;
  height: 60px;
  justify-content: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const TitleText = styled.Text`
  color: white;
`;


const TopLeftButtonContainer = styled.View`
  position: absolute;
  left: 20px;
  top: 23px;
  padding-left: 10px;
`;

const SecondaryButtonContainer = styled.View`
  position: absolute;
  right: 20px;
  top: 25px;
  padding-right: 12px;
`;

