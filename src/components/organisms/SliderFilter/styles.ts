import styled from 'styled-components/native';

export const SliderFilterContainer = styled.View`
  flex: 1;
  margin-left: 10;
  margin-right: 10;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const SliderTextView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

export const SliderPriceView = styled.View`
  margin-top: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const FilterSubtitle = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  font-family: 'Montserrat-Bold';
  color: black;
`;

export const FilterSubText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat.medium};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textTitle};
`;
