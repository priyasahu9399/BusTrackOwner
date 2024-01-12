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
import ImagePicker from 'react-native-image-crop-picker';
import InputText from './../../component/input/inputText';
import DropdownComponent from './../../component/dropdown/index';
import LongButton from './../../component/button/longButton';
import EditStaff from './../editStaff/index';
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
const Profile = ({navigation}) => {
  const [postData, setPostData] = useState({
    image: images.personimg,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const OnSelectImage = () => {
    ImagePicker.openPicker({
      width: width * 0.8,
      height: height * 0.4,
      cropping: true,
    }).then(image => {
      handleChange('image', {
        uri: image.path,
        name: image.filename,
        type: image.mime,
      });
      // console.log('Image', image);
    });
  };
  // const handleUpdate = object => {
  //   const formdata = new FormData();
  //   formdata.append('image', postData.image);
  // };
  const [img, setImg] = useState(postData.image);
  // console.log('img', img);
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
          <Text style={styles.photoText}>Upload photo from Galary</Text>
        </View>

        <InputText label="Staff Name" placeholder="Enter staff name" />
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
          children="Add staff"
          buttonStyle={{
            marginTop: height * 0.06,
          }}
          onPress={() => navigation.navigate('EditStaff')}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
