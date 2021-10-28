import styled from 'styled-components/native';

export const SectionView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
`;

export const Logo = styled.Image`
  width: 200px;
  margin-bottom: -75px;
`;

export const SectionImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const SectionText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
