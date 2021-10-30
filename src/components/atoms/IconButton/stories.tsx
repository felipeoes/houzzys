import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { IconButton } from './index';
import { Wrapper } from '../Wrapper/index';

const stories = storiesOf('IconButton', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const value = text('icon', 'filter-list');
  return <IconButton iconName={value} />;
});

stories.add('Transparent', () => {
  const value = text('icon', 'filter-list');
  return <IconButton iconName={value} transparent={true} />;
});
