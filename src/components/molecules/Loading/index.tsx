import React from 'react';

import { DetailText } from '../../index';

import { LoadingContainer, LoadingIndicator } from './styles';

type LoadingProps = {
  text?: string;
};

export function Loading({ text }: LoadingProps) {
  return (
    <LoadingContainer>
      <LoadingIndicator size="large" color="white" />
      <DetailText>{text || 'Loading...'}</DetailText>
    </LoadingContainer>
  );
}
