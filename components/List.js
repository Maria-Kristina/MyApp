import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const useFetch = (url) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMedia(json);
    setLoading(false);
  };

  useEffect(fetchUrl, []);
  return [media, loading];
};

const List = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [media, loading] = useFetch('http://media.mw.metropolia.fi/wbma/media/');
  return (
    <FlatList
      data={media}
      renderItem={
        ({item}) => <ListItem
          navigation={props.navigation}
          singleMedia={item}
        />
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
  navigation: PropTypes.object.isRequired,
};

export default List;
