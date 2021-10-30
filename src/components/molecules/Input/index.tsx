/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../styles/colors';

import {
  InputContainer,
  InputText,
  InputIcon,
  InputTextContainer,
  InputIconContainer,
} from './styles';
// import Autocomplete from 'react-native-autocomplete-input';

type InputProps = {
  placeholder: string;
  housesList: any;
} & TextInputProps;

export function Input(
  this: any,
  { placeholder, housesList, ...props }: InputProps,
) {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    setLocations(housesList);
  }, []);

  const findLocation = query => {
    if (query) {
      const regex = new RegExp(`${query.trim()}`, 'i');
      setFilteredLocations(
        locations.filter(location => location.location.search(regex) >= 0),
      );
    } else {
      setFilteredLocations([]);
    }
  };

  return (
    <>
      <InputContainer mt={25} style={styles.shadow}>
        {/* <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.shadow}
          // Data to show in suggestion
          data={filteredLocations}
          // Default value if you want to set something in input
          defaultValue={
            JSON.stringify(selectedLocation) === '{}'
              ? ''
              : selectedLocation.location.address
          }
          // Onchange of the text changing the state of the query
          // Which will trigger the findFilm method
          // To show the suggestions
          onChangeText={text => findLocation(text)}
          placeholder="Enter the film title"
          renderItem={({ item }) => (
            // For the suggestion view
            <TouchableOpacity
              onPress={() => {
                setSelectedLocation(item);
                setFilteredLocations([]);
              }}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        /> */}
        <InputTextContainer>
          <InputIconContainer>
            <Icon name="search" size={14} color={colors.primary} />
          </InputIconContainer>
          <InputText
            style={styles.shadow}
            {...props}
            placeholder={placeholder}
            placeholderTextColor="#828282"
          />
        </InputTextContainer>
      </InputContainer>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 4,
  },
  autocompletesContainer: {
    paddingTop: 0,
    zIndex: 1,
    width: '100%',
    paddingHorizontal: 8,
  },
  input: { maxHeight: 40 },
  inputContainer: {
    display: 'flex',
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#c7c6c1',
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: '5%',
    width: '100%',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  plus: {
    position: 'absolute',
    left: 15,
    top: 10,
  },
});
