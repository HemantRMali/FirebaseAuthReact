import React, {Component, useState} from 'react';
import {View, Text, Button, Dimensions, SafeAreaView} from 'react-native';
import FloatingLabelInput from 'react-native-floating-label-input';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FBARNTextInput = (props) => {
  const [value, setValue] = useState('');
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.signInButton}>
        <Text style={styles.signInText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FBARNTextInput;
