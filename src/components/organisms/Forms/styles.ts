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

  background: #d3dde6;
`;

export const FeatureInput = styled.TextInput`
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.montserrat.bold};
  width: ${({ theme }) => theme.metrics.px(40)}px;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FeatureIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(40)}px;
`;

export const IconMinuscontainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(40)}px;
  height: 100%;
  background-color: #e5e6eb;
`;

export const IconPluscontainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(40)}px;
  height: 100%;
`;

export const FormButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.metrics.px(30)}px;
  width: 100%;
  height: 100%;
`;
