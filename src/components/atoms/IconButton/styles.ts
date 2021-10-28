import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type IconButtonProps = {
  transparent?: boolean;
  iconName?: string;
  coloring?: boolean;
  iconText?: string;
  border?: boolean;
  custom?: boolean;
  custom2?: boolean;
  fill?: boolean;
  onPress: () => void;
};

type IconButtonContainerProps = Pick<IconButtonProps, 'transparent'>;

export const IconButtonContainer = styled.TouchableOpacity<IconButtonContainerProps>`
  height: ${({ theme }) => theme.metrics.px(48)}px;
  width: ${({ theme }) => theme.metrics.px(48)}px;
  background-color: ${({ theme, transparent }) =>
    transparent ? theme.colors.transparentButton : theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
`;

export const IconButtonCustom = styled(
  TouchableOpacity as new () => TouchableOpacity<IconButtonProps>,
).attrs({
  activeOpacity: 0.6,
})`
  height: ${({ theme }) => theme.metrics.px(40)}px;
  width: ${({ theme }) => theme.metrics.px(140)}px;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'white' : theme.colors.secondary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: #313d6f;
  border-width: 2px;
  border-top-left-radius: ${({ theme }) => theme.metrics.px(16)}px;
  border-bottom-right-radius: ${({ theme }) => theme.metrics.px(16)}px;
  border-bottom-left-radius: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const IconButtonCustom2 = styled(
  TouchableOpacity as new () => TouchableOpacity<IconButtonProps>,
).attrs({
  activeOpacity: 0.6,
})`
  height: ${({ theme }) => theme.metrics.px(40)}px;
  width: ${({ theme }) => theme.metrics.px(140)}px;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'white' : theme.colors.secondary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: #313d6f;
  border-width: 2px;
  border-bottom-right-radius: ${({ theme }) => theme.metrics.px(16)}px;
`;

export const IconText = styled.Text<IconButtonProps>`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.montserrat.semibold};
  margin-right: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ coloring }) => (coloring ? 'black' : 'white')};
  padding-left: ${({ theme }) => theme.metrics.px(32)}px;
  padding-right: ${({ theme }) => theme.metrics.px(16)}px;
  padding-top: ${({ theme }) => theme.metrics.px(8)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(8)}px;
`;
