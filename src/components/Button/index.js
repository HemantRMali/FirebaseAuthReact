import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const FBARNTextInput = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.signInButton}>
        <Text style={styles.signInText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FBARNTextInput;
