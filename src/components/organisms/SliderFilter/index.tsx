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

type SliderExampleProps = {
  min: number;
  max: number;
  step: number;
  type: boolean;
  onChangePrice: (values: number[]) => void;
};

export class SliderExample extends React.Component<SliderExampleProps> {
  min = this.props.min;
  max = this.props.max;
  step = this.props.step;

  state = {
    value: [this.min, this.max],
    x: 0,
    y: 0,
  };

  handleOnChangeMinMax(minValue?, maxValue?) {
    if (minValue && maxValue) {
      this.min = minValue;
      this.max = maxValue;
    }
  }

  handleOnChangePrice() {
    this.props.onChangePrice(this.state.value);
  }

  render() {
    return (
      <>
        <SliderFilterContainer>
          <SliderTextView>
            <SliderPriceView>
              <FilterSubText>Min: ${this.min}</FilterSubText>
              <CardHightLightText>${this.state.value[0]}</CardHightLightText>
            </SliderPriceView>
            <SliderPriceView>
              <FilterSubText>Max: ${this.max}</FilterSubText>
              <CardHightLightText>${this.state.value[1]}</CardHightLightText>
            </SliderPriceView>
          </SliderTextView>

          <Slider
            style={{ width: '100%', height: 100 }}
            minimumValue={this.min}
            step={this.step}
            maximumValue={this.max}
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
