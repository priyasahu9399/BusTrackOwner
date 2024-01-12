import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLORS, FONTS} from './../../constants';
import {images, icons} from './../../constants';
import CheckBox from 'react-native-check-box';
import InputText from './../../component/input/inputText';
import LongButton from './../../component/button/longButton';
import styles from './styles';
import DropdownComponent from './../../component/dropdown/index';

const {width, height} = Dimensions.get('window');

const UserType = [
  {label: 'Owner', value: '1'},
  {label: 'Driver', value: '2'},
  {label: 'Conductor', value: '3'},
];

const OwnerLogin = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View>
          <Image source={images.signin} style={styles.signin} />
        </View>
        <Text style={styles.label}>User Type</Text>

        <DropdownComponent
          mode="default"
          data={UserType}
          placeholder="Select user type"
          dropdownStyle={{width: width * 0.92}}
          containStyle={{width: width * 0.9, height: height * 0.17}}
          itemtextStyle={{color: COLORS.black}}
        />
        <InputText
          label="Phone no"
          placeholder="Enter phone no."
          maxLength={10}
          keyboardType="numeric"
        />

        <InputText
          label="Password"
          placeholder="Atleast 6 character"
          secureTextEntry={true}
        />

        <View style={styles.row}>
          <CheckBox
            isChecked={checked}
            onClick={() => setChecked(!checked)}
            checkBoxColor={COLORS.primary}
          />
          <Text style={styles.agree}>Agree with</Text>
          <TouchableOpacity>
            <Text style={styles.blueText}>Term & Condition</Text>
          </TouchableOpacity>
        </View>

        <LongButton children="Login" />
      </ScrollView>
    </View>
  );
};

export default OwnerLogin;
