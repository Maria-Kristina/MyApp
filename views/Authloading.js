import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Text,
} from 'react-native';

const bootstrapAsync = async (props) => {
  async function getToken() {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log('token', userToken);
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  useEffect(() => {
    getToken();
  }, []);
};

const Authloading = (props) => {
  bootstrapAsync(props);
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

Authloading.propTypes = {
  navigation: PropTypes.object,
};

export default Authloading;
