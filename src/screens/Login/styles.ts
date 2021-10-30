import styled from 'styled-components/native';

export const LoginContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.metrics.px(5)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const LoginInput = styled.TextInput`
  height: ${({ theme }) => theme.metrics.px(50)}px;
  width: 95%;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  shadow-offset: 10px;

  background-color: white;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: ${({ theme }) => theme.fonts.montserrat.regular};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: black;
  padding-left: ${({ theme }) => theme.metrics.px(6)}px;
`;

export const RegisterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat.regular};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
`;

export const RegisterHighlightTextContainer = styled.TouchableOpacity``;

export const RegisterHighlightText = styled.Text`
  color: #323e70;
  font-family: ${({ theme }) => theme.fonts.montserrat.bold};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  top: 5px;
`;

export const InputContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;
