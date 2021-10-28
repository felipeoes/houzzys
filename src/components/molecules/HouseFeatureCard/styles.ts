import styled from 'styled-components/native';

export const FeatureCardContainer = styled.View`
  height: ${({ theme }) => theme.metrics.px(80)}px;
  width: ${({ theme }) => theme.metrics.px(90)}px;
  background-color: white;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.terciary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
`;
