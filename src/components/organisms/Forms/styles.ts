import styled from 'styled-components/native';

export const FilterCardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
`;

export const FeatureDescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${({ theme }) => theme.metrics.px(115)}px;
`;

export const FeatureInputContainer = styled.View`
  flex-direction: row;
  width: ${({ theme }) => theme.metrics.px(120)}px;
  height: ${({ theme }) => theme.metrics.px(35)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  background: #d3dde6;
`;

export const FeatureInput = styled.TextInput`
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.montserrat.regular};
  width: ${({ theme }) => theme.metrics.px(40)}px;
  background: #323e70;
  color: white;
`;

export const FeatureIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(40)}px;
`;

export const IconButtoncontainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(40)}px;
  height: 100%;
`;
