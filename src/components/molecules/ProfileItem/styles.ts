import styled from 'styled-components/native';

export const ProfileItemContainer = styled.TouchableOpacity`
  flex: 1;
  margin-top: ${({ theme }) => theme.metrics.px(35)}px;
  width: ${({ theme }) => theme.metrics.px(250)}px;
  height: ${({ theme }) => theme.metrics.px(25)}px;
  flex-direction: row;
`;

export const ProfileItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textTitle};
  font-family: ${({ theme }) => theme.fonts.montserrat.regular};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
`;

export const ProfileIconContainer = styled.View`
  width: ${({ theme }) => theme.metrics.px(30)};
  height: ${({ theme }) => theme.metrics.px(50)};
`;
