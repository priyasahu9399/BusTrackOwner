import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import UserCart from './../../component/carts/userCart';
import DropdownComponent from './../../component/dropdown/index';
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';

const {width, height} = Dimensions.get('window');
const Time = [
  {label: 'Morning', value: '1'},
  {label: 'After Noon', value: '2'},
  {label: 'Evening', value: '3'},
];
const StaffList = ({navigation}) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [visibletext, setVisibleText] = useState(false);

  console.log('textdf', date);
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innerContainer}>
        <View style={styles.topContainer}>
          <DropdownComponent
            placeholder="Morning"
            data={Time}
            dropdownStyle={styles.dropdown}
            containStyle={styles.dropcontain}
          />
          <View>
            <View style={styles.rowdate}>
              {visibletext === true && (
                <TextInput editable={false} style={styles.input} value={date} />
              )}
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Image source={icons.date} style={styles.date} />
              </TouchableOpacity>
            </View>

            <DatePicker
              modal
              title="Select date"
              mode="date"
              open={open}
              date={new Date()}
              onConfirm={d => {
                setOpen(false);
                setDate(formattedDateServer(d));
                setVisibleText(true);
              }}
              onCancel={() => {
                setOpen(false);
              }}
              theme="light"
              textColor={COLORS.black}
            />
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.UserCartdata}
          renderItem={({item}) => (
            <UserCart
              name={item.name}
              driver={item.driver}
              image={item.image}
              choose={false}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default StaffList;
