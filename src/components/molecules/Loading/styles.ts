import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.metrics.px(48)}px;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
`;
