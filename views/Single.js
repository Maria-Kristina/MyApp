import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

const Single = (props) => {
  const uri = props.navigation.getParam('uri');
  const file = props.navigation.getParam('file');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{file.title}</Text>
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: uri + file.filename}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    color: '#263b2b',
    paddingBottom: 20,
  },
  imagebox: {
    aspectRatio: 1,
    justifyContent: 'center',
    width: 300,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
    width: 300,
  },
});

Single.propTypes = {
  navigation: PropTypes.object,
};

export default Single;
