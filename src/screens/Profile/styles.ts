import styled from 'styled-components/native';

export const ProfileHeader = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.blueTransparent};
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(100)}px;
  padding-top: ${({ theme }) => theme.metrics.px(45)}px;
  padding-left: ${({ theme }) => theme.metrics.px(12)}px;
  padding-right: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const GreetingMessage = styled.Text``;

export const ProfileImage = styled.Image`
  margin-top: -55px;
  margin-left: 140px;

  width: 110px;
  height: 110px;
  border-width: 3px;
  border-color: #ffffff;
  border-radius: 100px;
`;

export const LogOutView = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const ProfileContentContainer = styled.View`
  margin-top: ${({ theme }) => theme.metrics.px(15)}px;
  margin-left: ${({ theme }) => theme.metrics.px(12)}px;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
  justify-content: flex-start;
`;
