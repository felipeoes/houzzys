import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const ScreenLine = styled.View`
  background-color: ${({ theme }) => theme.colors.blueTransparent};
  width: 100%;
  height: 1px;
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
`;

export const ImageBackground = styled.ImageBackground`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: ${props => (props.height ? props.height : 40)}%;
  padding-top: ${({ theme }) => theme.metrics.px(48)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 48,
  },
})`
display: flex;
flex-direction= column;
width: 100%;
height: ${({ theme }) => theme.metrics.hp(65)}px;
background-color: white;
padding: ${({ theme }) => theme.metrics.px(24)}px;
border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;
border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
position: absolute;
bottom: 0;
`;

export const FeaturesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: ${({ theme }) => theme.metrics.hp(3)}px;
`;

export const HomeFeaturesContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
`;
