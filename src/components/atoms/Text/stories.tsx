import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper/index';
import {
  Title,
  CardDescription,
  CardHightLightText,
  CardTitle,
  InputLabel,
  DetailTitle,
  DetailSectionTitle,
  DetailText,
  DetailSubTitle,
} from './index';

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Title', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <Title>{value}</Title>;
});

stories.add('CardTitle', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHightLightText', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <CardHightLightText>{value}</CardHightLightText>;
});

stories.add('InputLabel', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <InputLabel>{value}</InputLabel>;
});

stories.add('DetailTitle', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('DetailText', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <DetailText>{value}</DetailText>;
});

stories.add('DetailSubTitle', () => {
  const value = text('Text', 'Encontre seu imóvel');
  return <DetailSubTitle>{value}</DetailSubTitle>;
});
