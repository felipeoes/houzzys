import styled from 'styled-components/native';

export const ModalContainer = styled.Modal`
  flex: 1;
  width: ${({ theme }) => theme.metrics.wp(100)}px;
  height: ${({ theme }) => theme.metrics.hp(100)}px;
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalBackground = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.transparentModal};
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 48,
  },
})`
display: flex;
flex-direction= column;
width: 100%;
height: ${props =>
  props.width ? props.width : ({ theme }) => theme.metrics.hp(86)}px;
background-color: white;
padding: ${({ theme }) => theme.metrics.px(24)}px;
border-top-right-radius:  ${props =>
  props.bRight ? props.bRight : ({ theme }) => theme.metrics.px(24)}px;
border-top-left-radius: ${props =>
  props.bLeft ? props.bLeft : ({ theme }) => theme.metrics.px(24)}px;
position: absolute;
bottom: 0;
`;

export const IconView = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
`;
