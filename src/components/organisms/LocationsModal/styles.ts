import styled from 'styled-components/native';

export const LocationsModalContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(40)}px;
`;
