import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {data} from './../../constants';

const {width, height} = Dimensions.get('window');

const InputText = ({
  onChangeText,
  placeholder,
  value,
  label,
  keyboardType,
  navigation,
  icon,
  closeicon,
  textInputStyle,
  mainStyle,
  maxLength,
  secureTextEntry,
  mainBox,
}) => {
  const [showpassword, setShowpassword] = useState(false);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.row, mainBox]}>
        <TextInput
          placeholderTextColor={COLORS.lightblack}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && showpassword}
          style={[styles.textInput, textInputStyle]}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowpassword(!showpassword)}
            style={styles.iconBox}>
            <Image
              style={styles.icon}
              source={!showpassword ? icons.eye : icons.closeEye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray20,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: width * 0.02,
    width: width * 0.92,
    alignSelf: 'center',
  },
  iconBox: {
    width: width * 0.08,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: width * 0.05,
    height: height * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  label: {
    ...FONTS.fiveHundred,
    fontSize: 15,
    color: COLORS.black,
    marginTop: height * 0.02,
  },
  textInput: {
    ...FONTS.fourHundred,
    fontSize: 13,
    color: COLORS.black,
    width: width * 0.8,
    marginBottom: -2,
  },
});

export default InputText;
