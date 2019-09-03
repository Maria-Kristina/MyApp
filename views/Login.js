import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import FormTextInput from '../components/FormTextInput';

const Login = (props) => {
  const signInAsync = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    await AsyncStorage.setItem('userToken', json.token);
    props.navigation.navigate('App');
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.form}>
        <FormTextInput
          autoCapitalize='none'
          placeholder='username'
        />
        <FormTextInput
          autoCapitalize='none'
          placeholder='password'
          secureTextEntry={true}
        />
        <Button title="Sign in!" onPress={
          () => {
            signInAsync('http://media.mw.metropolia.fi/wbma/login', userData);
          }
        } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
