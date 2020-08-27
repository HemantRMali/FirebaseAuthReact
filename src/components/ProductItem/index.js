import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const Item = ({item}) => (
  <View style={styles.item}>
    <Image
      source={{
        uri: item['product-image-url'],
      }}
      style={styles.productImage}
    />
    <View style={styles.titlesContainer}>
      <Text style={styles.title}>{item['product-name']}</Text>
      <Text style={styles.subTitle}>{item['header-top-left-text']}</Text>
      <View style={styles.bottomTitle}>
        <Text style={{color: 'white'}}>{item['product-cta-text']}</Text>
      </View>
    </View>
  </View>
);

export default Item;
