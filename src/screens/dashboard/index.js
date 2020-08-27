import React, {useState} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import styles from './styles';

import Item from '../../components/ProductItem';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    subTitle:
      'ashjdasldhjh jkasjkdh kajshd asdl hHskdhaksdkasdjhaskdhaksdh askdhaskdhjkashdkjashd kjahsd kajshd asdl hHskdhaksdkasdjhaskdhaksdh askdhaskdhjka asjkdh kajshd asdl hHskdhaksdkasdjhaskdhaksdh askdhaskdhjkashdkjashd kjahsd kajshd asdl hHskdhaksdkasdjhaskdhaksdh askdhaskdhjka asjkdh kajshd asdl hHskdhaksdkasdjhaskdhaksdh askdhaskdhjkashdkjashd kjahsd kajshd asdl hHskdhaksdkasdjhaskdhaksdh askdhaskdhjka shdkjashd kjahsd',
    bottomTitle: 'asdljkasj ftywe ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    subTitle: 'asldhasdhkashdjkash aseytqwuyetqwu ',
    bottomTitle: 'rkgeoitewor uiyerewi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    subTitle: 'aslkdjhasj asduiyiusa asdasdhjjbkasd',
    bottomTitle: ' askdljals ',
  },
];

const Dashboard = (props) => {
  const renderItem = ({item}) => <Item item={item} />;
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
