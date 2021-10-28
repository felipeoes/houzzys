import styled from 'styled-components/native';

export const LoginContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
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
