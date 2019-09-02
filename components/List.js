import React, {useContext, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const useFetch = (url) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);
  // const fetchUrl = async () => {
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setMedia(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return [media, loading];
};

const List = () => {
  const [media, loading] = useFetch('https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json');
  console.log(loading);
  console.log('media', media);
  return (
    <FlatList
      data={media}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
