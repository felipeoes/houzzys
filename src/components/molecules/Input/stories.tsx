import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Wrapper } from '../../atoms/Wrapper';
import { Input } from './index';

const stories = storiesOf('Input', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const placeholder = text('Placeholder', 'Digite o endereço');
  const label = text('Label', 'Localização');
  return <Input label={label} placeholder={placeholder} />;
});
