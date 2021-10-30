/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Slider from 'react-native-sliders';
import { AppRegistry } from 'react-native';
import { colors } from '../../../styles/colors';
import {
  SliderFilterContainer,
  SliderPriceView,
  SliderTextView,
} from './styles';
import { CardHightLightText } from '../../index';
import { FilterSubText } from '../FilterModal/styles';

export class SliderExample extends React.Component {
  state = {
    value: [100, 20000],
    x: 0,
    y: 0,
  };

  handleOnChangePrice() {
    this.props.onChangePrice(this.state.value);
  }

  render() {
    return (
      <>
        <SliderFilterContainer>
          <SliderTextView>
            <SliderPriceView>
              <FilterSubText>Min: $100</FilterSubText>
              <CardHightLightText>${this.state.value[0]}</CardHightLightText>
            </SliderPriceView>
            <SliderPriceView>
              <FilterSubText>Max: $20000</FilterSubText>
              <CardHightLightText>${this.state.value[1]}</CardHightLightText>
            </SliderPriceView>
          </SliderTextView>

          <Slider
            style={{ width: '100%', height: 100 }}
            minimumValue={100}
            step={100}
            maximumValue={20000}
            value={this.state.value}
            onValueChange={value => {
              this.setState({ value });
              this.handleOnChangePrice();
            }}
            thumbStyle={{
              borderRadius: 20,
              width: 25,
              height: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            thumbTintColor={colors.secondary}
          />
        </SliderFilterContainer>
      </>
    );
  }
}

AppRegistry.registerComponent('SliderExample', () => SliderExample);
