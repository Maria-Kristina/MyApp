import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import List from '../components/List';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <List navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
