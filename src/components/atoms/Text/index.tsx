import styled from 'styled-components/native';

type BaseTextProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  fs?: number;
};

export const BaseText = styled.Text<BaseTextProps>`
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`;

export const Title = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
`;
export const InputSectionLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.textTitle};
  font-family: 'Montserrat-SemiBold';
`;

export const InputLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: black;
  font-family: 'Montserrat-SemiBold';
`;
export const ButtonText = styled(BaseText)`
  font-size: ${({ theme, fs }) => theme.metrics.px(fs || 22)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

// Detail Texts:
export const DetailTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: black;
  font-family: 'Montserrat-Bold';
`;
export const DetailSubTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: black;
  font-family: 'Montserrat-SemiBold';
  margin-top: ${({ theme }) => theme.metrics.px(6)}px;
`;
export const DetailText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(15)}px;
  color: black;
  font-family: 'Montserrat-Regular';
`;
export const DetailSectionTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: black;
  font-family: 'Montserrat-Bold';
`;

//Cards Texts:

export const CardTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.textTitle};
  font-family: 'Montserrat-Bold';
`;

export const CardDescription = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: black;
  font-family: 'Montserrat-Regular';
`;
export const CardHightLightText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.montserrat.semibold};
  margin-top: ${({ theme }) => theme.metrics.px(6)}px;
`;
