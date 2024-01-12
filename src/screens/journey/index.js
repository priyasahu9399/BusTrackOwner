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
import {icons, images} from './../../constants';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';

const {width, height} = Dimensions.get('window');
const Journey = ({navigation}) => {
  const [title, setTitle] = useState('Done');
  const [desc, setDesc] = useState('Your Location here');
  const [region, setRegion] = useState();

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View style={{marginVertical: height * 0.03}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 23.259898009008825,
              longitude: 77.41410987941556,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            onRegionChange={x => {
              setRegion(x);
              console.log('region', region);
            }}
            style={styles.mapview}>
            <Marker
              coordinate={{
                latitude: 23.104836594066356,
                longitude: 77.5361550565445,
              }}
              pinColor={COLORS.black}
              title={title}
              description={desc}>
              <TouchableOpacity>
                <Image source={icons.pin} style={styles.mapimage} />
              </TouchableOpacity>
            </Marker>
          </MapView>
        </View>

        <View>
          <View style={styles.rowfield}>
            <Image source={icons.location} style={styles.location} />
            <View>
              <Text style={styles.locationHeading}>
                Hazaribagh New Bus stand
              </Text>
              <Text style={styles.time}>10:30 AM</Text>
            </View>
          </View>
          <View style={styles.borderheight}></View>

          <View style={styles.rowfield}>
            <Image source={icons.Lcircule} style={styles.location} />

            <Image source={images.redbus} style={styles.redbus} />

            <View>
              <Text style={styles.locationHeading}>
                Bhagwan Birsa Mrig Vihar
              </Text>
              <Text style={styles.time}>1:30 AM</Text>
            </View>
          </View>
          <View
            style={[styles.borderheight, {borderColor: COLORS.gray20}]}></View>

          <View style={styles.rowfield}>
            <Image
              source={icons.location}
              style={[styles.location, {tintColor: '#FF0000'}]}
            />
            <View>
              <Text style={styles.locationHeading}>
                Bhagwan Birsa Mrig Vihar
              </Text>
              <Text style={styles.time}>1:30 AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Journey;
