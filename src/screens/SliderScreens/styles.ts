import styled from 'styled-components/native';

export const ButtonCircle = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`;

export const SkipButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(45)}px;
  height: ${({ theme }) => theme.metrics.px(26)}px;
  margin-top: 20px;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`;

export const SliderTitle = styled.Text`
  width: ${({ theme }) => theme.metrics.px(340)}px;
  text-align: center;
  font-size: ${({ theme }) => theme.metrics.px(38)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
  margin-bottom: ${({ theme }) => theme.metrics.px(48)}px;
`;

export const SliderView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const SliderText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: ${({ theme }) => theme.colors.transparentText};
  font-family: 'Montserrat-Bold';
  width: ${({ theme }) => theme.metrics.px(300)}px;
  text-align: center;
  margin-top: ${({ theme }) => theme.metrics.px(48)}px;
`;

export const SkipText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: ${({ theme }) => theme.metrics.px(15)}px;
  color: white;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const LoginText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat.semibold};
  font-size: ${({ theme }) => theme.metrics.px(15)}px;
  margin-top: ${({ theme }) => theme.metrics.px(48)}px;
`;
