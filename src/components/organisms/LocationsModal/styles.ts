import styled from 'styled-components/native';

type LocationModalProps = {
  focused?: boolean;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  width?: number;
  height?: number;
};
export const LocationsModalContainer = styled.SafeAreaView<LocationModalProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${({ theme, focused }) =>
    focused ? theme.metrics.px(40) : theme.metrics.px(0)}px;
`;

export const LocationsListContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const LocationTextContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin-left: ${({ theme }) => theme.metrics.px(15)}px;
  margin-top: ${({ theme }) => theme.metrics.px(15)}px;
`;

export const LocationText = styled.Text`
  margin-left: ${({ theme }) => theme.metrics.px(15)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.montserrat.medium};
  color: black;
`;
