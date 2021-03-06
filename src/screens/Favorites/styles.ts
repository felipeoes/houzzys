import styled from 'styled-components/native';

type BaseViewProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  width?: number;
  height?: number;
};

export const ScreenScroll = styled.ScrollView``;

export const ScreenContainer = styled.SafeAreaView`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.metrics.px(6)}px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.wp(100)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: 0px;
`;

export const InputContainer = styled.View<BaseViewProps>`
  padding-left: ${({ theme }) => theme.metrics.px(8)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 34)}px;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  margin-left: ${({ theme }) => theme.metrics.px(5)}px;
`;
export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 65%;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;
