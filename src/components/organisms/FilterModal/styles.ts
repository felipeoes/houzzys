import styled from 'styled-components/native';

export const FilterContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(40)}px;
`;

export const InputRowsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const InputRowsItems = styled.View`
  width: 45%;
`;

export const FilterSubtitle = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  font-family: 'Montserrat-Bold';
  color: black;
`;

export const FilterTextView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

export const FilterPriceView = styled.View`
  margin-top: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const FilterSubText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat.medium};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textTitle};
`;
