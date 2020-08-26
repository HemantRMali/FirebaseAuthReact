import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const Item = ({item}) => (
  <View style={styles.item}>
    <Image
      source={{
        uri:
          'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
      }}
      style={styles.productImage}
    />
    <View style={styles.titlesContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
      <View style={styles.bottomTitle}>
        <Text style={{color: 'white'}}>{item.bottomTitle}</Text>
      </View>
    </View>
  </View>
);

export default Item;
