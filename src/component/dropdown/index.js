import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {Dropdown} from 'react-native-element-dropdown';
const {width, height} = Dimensions.get('window');

const DropdownComponent = ({
  data,
  mode,
  placeholder,
  dropdownStyle,
  containStyle,
  itemtextStyle,
  dropdownPosition,
}) => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        mode={mode}
        dropdownPosition={dropdownPosition}
        style={[styles.dropdown, dropdownStyle]}
        containerStyle={[styles.containerStyle, containStyle]}
        placeholderStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={[styles.itemTextStyle, itemtextStyle]}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        showsVerticalScrollIndicator={false}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: width * 0.4,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    borderRadius: 6,
    backgroundColor: COLORS.white,
    height: height * 0.066,
    paddingHorizontal: width * 0.03,
  },
  containerStyle: {
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginTop: height * -0.03,
    height: height * 0.3,
    width: width * 0.4,
  },
  placeholderStyle: {
    color: COLORS.lightblack,
    ...FONTS.fourHundred,
    fontSize: 13,
  },
  iconStyle: {
    tintColor: COLORS.lightblack,
  },
  itemTextStyle: {
    color: COLORS.lightblack,
    ...FONTS.fourHundred,
    fontSize: 14,
    marginBottom: height * -0.03,
  },
  selectedTextStyle: {
    ...FONTS.fourHundred,
    fontSize: 14,
    color: COLORS.black,
  },
});

export default DropdownComponent;
