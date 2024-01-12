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
import styles from './styles';
import InputText from './../../component/input/inputText';
import DropdownComponent from './../../component/dropdown/index';
import LongButton from './../../component/button/longButton';
import EditBus from './../editBus/index';
import ImagePicker from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

const route = [
  {label: 'bhopal', value: '1'},
  {label: 'indrapuri', value: '2'},
  {label: 'chinar', value: '3'},
  {label: 'minal', value: '4'},
  {label: 'bhopal', value: '5'},
  {label: 'ayodhya', value: '6'},
  {label: 'mandideep', value: '7'},
];

const Time = [
  {label: '7AM', value: '1'},
  {label: '10AM', value: '2'},
  {label: '12AM', value: '3'},
];
const AddBus = ({navigation}) => {
  const [postData, setPostData] = useState({
    image: images.blackbus,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const OnSelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      handleChange('image', {
        uri: image.path,
        name: image.filename,
        type: image.mime,
      });
    });
  };

  const [img, setImg] = useState(postData.image);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View>
          <TouchableOpacity onPress={OnSelectImage} style={styles.photoBox}>
            <Image source={postData.image} style={styles.photo} />
            <Image source={icons.camera} style={styles.camera} />
          </TouchableOpacity>

          <Text style={styles.photoText}>Upload Bus photo from Galary</Text>
        </View>

        <InputText label="Bus Name" placeholder="Enter Bus name" />
        <InputText label="Mobile no" placeholder="Enter mobile no" />
        <View style={styles.rowField}>
          <DropdownComponent placeholder="Routes" data={route} />
          <DropdownComponent
            placeholder="Time"
            data={Time}
            containStyle={{height: height * 0.2}}
          />
        </View>
        <InputText label="School name" placeholder="Enter school name" />
        <InputText label="Bus no" placeholder="Enter bus no" />

        <LongButton
          children="Add bus"
          buttonStyle={{
            marginTop: height * 0.06,
          }}
          onPress={() => navigation.navigate('EditBus')}
        />
      </ScrollView>
    </View>
  );
};

export default AddBus;
