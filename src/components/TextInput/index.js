import React, {Component, useState} from 'react';
import {View, Text, Button, Dimensions, SafeAreaView} from 'react-native';
import FloatingLabelInput from 'react-native-floating-label-input';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FBARNButton = (props) => {
  const [value, setValue] = useState('');
  return (
    <FloatingLabelInput
      containerStyles={styles.textInputContainer}
      label={props.label}
      value={value}
      secureTextEntry={props.isSecure}
      onChangeText={(text) => setValue(text)}
    />
  );
};

export default FBARNButton;
