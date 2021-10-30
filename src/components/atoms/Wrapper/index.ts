import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;
