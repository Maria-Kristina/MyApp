import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const getThumbnail = (url) => {
  console.log('url', url);
  const [thumbnails, setThumbnails] = useState({});
  async function fetchUrl() {
    console.log('stfu');
    const response = await fetch('http://media.mw.metropolia.fi/wbma/media/' + url);
    const json = await response.json();
    console.log('json', json);
    setThumbnails(json.thumbnails);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return thumbnails;
};

const ListItem = (props) => {
  const thumbnail = getThumbnail(props.singleMedia.file_id);
  console.log('thumbnails', thumbnail);
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
        {thumbnail && <Image
          style={styles.image}
          source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + thumbnail.w160}}
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
    borderRadius: 16,
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
};

export default ListItem;
