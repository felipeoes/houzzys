import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Wrapper } from '../../atoms/Wrapper';
import { HouseCard } from './index';

const stories = storiesOf('HouseCard', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const imgSrc =
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  const imageSource = text('uri', imgSrc);
  const title = text('title', 'House');
  const description = text('description', 'Sonserina house');
  const price = number('Price', 200);

  return (
    <HouseCard
      imageSource={imageSource}
      title={title}
      description={description}
      price={price}
    />
  );
});
