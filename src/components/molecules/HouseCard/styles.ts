import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.wp(86)}px;
  height: ${({ theme }) => theme.metrics.px(290)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  background-color: white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.metrics.px(30)}px;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 70%;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-vertical: ${({ theme }) => theme.metrics.px(12)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(14)}px;
  height: 30%;
`;

export const TextContainerLeft = styled.View`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextContainerRight = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
