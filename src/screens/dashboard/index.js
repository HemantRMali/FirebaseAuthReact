import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import styles from './styles';

import Item from '../../components/ProductItem';

const renderItem = ({item}) => <Item item={item} />;

import database from '@react-native-firebase/database';

import Loader from '../../components/Loader';

/**
 * This component is used to get products from firebase and show in flatlist.
 * @param {*} props
 */
const Dashboard = (props) => {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState();
  // consider it as component did mount
  useEffect(() => {
    setLoading(true);
    const response = database().ref('products');
    response.on('value', (snapshot) => {
      console.log('snapshot:', snapshot.val());
      setProducts(snapshot.val());
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Loader isTransparent={true} loading={isLoading} />
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
