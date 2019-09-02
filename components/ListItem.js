import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const getThumbnail = (url) => {
  const [thumbnails, setThumbnails] = useState({});
  async function fetchUrl() {
    const response = await fetch('http://media.mw.metropolia.fi/wbma/media/' + url);
    const json = await response.json();
    setThumbnails(json.thumbnails);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return thumbnails;
};

const ListItem = (props) => {
  const uri = 'http://media.mw.metropolia.fi/wbma/uploads/';
  const {navigation, singleMedia} = props;
  const thumbnail = getThumbnail(singleMedia.file_id);
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={
        () => {
          console.log('singleMedia', singleMedia);
          navigation.push('Single', {uri: uri, file: singleMedia});
        }
      }>
      <View style={styles.imagebox}>
        {thumbnail && <Image
          style={styles.image}
          source={{uri: uri + thumbnail.w160}}
        />}
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}> {props.singleMedia.title} </Text>
        <Text style={styles.description}> {props.singleMedia.description} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#ffb84d',
    borderRadius: 16,
  },
  imagebox: {
    aspectRatio: 1,
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 100,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: 10,
  },
  description: {
    color: '#ffebcc',
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: '400',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default ListItem;
