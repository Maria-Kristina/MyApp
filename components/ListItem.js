import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  ListItem as BaseListItem,
  Text,
  Right,
  Left,
  Thumbnail,
} from 'native-base';

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
  const thumbnail = getThumbnail(props.singleMedia.file_id);
  return (
    <BaseListItem onPress={
      () => {
        navigation.push('Single', {uri: uri, file: singleMedia});
      }
    }>
      <Right>
        <Thumbnail
          source={{uri: uri + thumbnail.w160}}
        />
      </Right>
      <Left>
        <Text>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </Left>
    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
