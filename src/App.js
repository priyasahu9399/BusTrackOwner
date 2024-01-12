import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Root from './Root';
// import {Provider} from 'react-redux';
// import {store} from './redux';

const App = () => {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
  //  </Provider>

  );
};

export default App;
