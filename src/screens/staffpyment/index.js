import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import PersonPymentCart from './../../component/carts/pymentCart';
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';
const {width, height} = Dimensions.get('window');

const StaffPyment = ({navigation}) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [visibletext, setVisibleText] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
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

        {data.PersonPymentCartdata.map((item, index) => (
          <PersonPymentCart
            key={item.index}
            name={item.name}
            driverid={item.driverid}
            image={item.image}
            status={item.status}
            rupee={item.rupee}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default StaffPyment;
