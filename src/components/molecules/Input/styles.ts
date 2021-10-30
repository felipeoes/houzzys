import styled from 'styled-components/native';

type InputContainerProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const InputContainer = styled.View<InputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`;
export const InputIcon = styled.TouchableOpacity`
  height: ${({ theme }) => theme.metrics.px(40)}px;
  width: ${({ theme }) => theme.metrics.px(50)}px;
  margin-top: ${({ theme }) => theme.metrics.px(36)}px
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  height: ${({ theme }) => theme.metrics.px(40)}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.metrics.px(18)}px;
  shadow-offset: 10px;

  background-color: white;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: ${({ theme }) => theme.fonts.montserrat.regular};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: black;
  padding-left: ${({ theme }) => theme.metrics.px(26)}px;
`;

export const InputTextContainer = styled.SafeAreaView`
  flex-direction: row;
`;

export const InputIconContainer = styled.View`
  flex: 1;
  position: absolute;
  z-index: 999;
  elevation: 10;
  margin-top: ${({ theme }) => theme.metrics.px(24)}px;
  margin-left: ${({ theme }) => theme.metrics.px(8)}px;
`;

export const ProfileDropdownContainer = styled.TouchableOpacity``;
