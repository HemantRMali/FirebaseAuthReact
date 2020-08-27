import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const ScreenTitle = (props) => {
  return <Text style={styles.screenTitle}>{props.title}</Text>;
};

export default ScreenTitle;
