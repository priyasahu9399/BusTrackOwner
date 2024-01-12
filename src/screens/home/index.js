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
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import BusIdCart from './../../component/carts/BusidCart';

const Home = ({navigation}) => {
  const [activeUser, setActiveUser] = useState(1);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <View style={styles.innerContainer}>
        <View style={styles.rowfield}>
          <TouchableOpacity
            onPress={() => setActiveUser(1)}
            style={[
              styles.userlistBox,
              activeUser === 1 && {
                borderBottomWidth: 4,
                borderColor: COLORS.primary,
              },
            ]}>
            <Text style={styles.userList}>Routes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveUser(2)}
            style={[
              styles.userlistBox,
              activeUser === 2 && {
                borderBottomWidth: 4,
                borderColor: COLORS.primary,
              },
            ]}>
            <Text style={styles.userList}>Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveUser(3)}
            style={[
              styles.userlistBox,
              activeUser === 3 && {
                borderBottomWidth: 4,
                borderColor: COLORS.primary,
              },
            ]}>
            <Text style={styles.userList}>Conductor</Text>
          </TouchableOpacity>
        </View>

        {activeUser === 1 && (
          <View>
            {data.BusIdCartdata.map((item, index) => (
              <BusIdCart
                key={item.index}
                name={item.name}
                driver={item.driver}
                busNo={item.busNo}
                time={item.time}
                image={item.image}
                driverlocation={item.driverlocation}
              />
            ))}
          </View>
        )}

        {activeUser === 2 && (
          <View>
            {data.BusIdCartdata.map((item, index) => (
              <BusIdCart
                key={item.index}
                name={item.name}
                driver={item.driver}
                busNo={item.busNo}
                time={item.time}
                image={item.image}
                driverlocation={item.driverlocation}
              />
            ))}
          </View>
        )}

        {activeUser === 3 && (
          <View>
            {data.BusIdCartdata.map((item, index) => (
              <BusIdCart
                key={item.index}
                name={item.name}
                driver={item.driver}
                busNo={item.busNo}
                time={item.time}
                image={item.image}
                driverlocation={item.driverlocation}
              />
            ))}
          </View>
        )}
      </View>

      {/* <View
        style={[styles.innerContainer, styles.marginTop]}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.PersonPymentCartdata}
          renderItem={({item}) => (
            <PersonPymentCart
              name={item.name}
              driverid={item.driverid}
              image={item.image}
              status={item.status}
              rupee={item.rupee}
            />
          )}
        />
      </View> */}
    </ScrollView>
  );
};

export default Home;
