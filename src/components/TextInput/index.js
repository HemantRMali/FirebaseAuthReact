import React, {useState} from 'react';
import FloatingLabelInput from 'react-native-floating-label-input';
import styles from './styles';

const FBARNButton = (props) => {
  const [value, setValue] = useState('');
  return (
    <FloatingLabelInput
      containerStyles={styles.textInputContainer}
      label={props.label}
      value={props.value}
      secureTextEntry={props.isSecure}
      keyboardType={props.keyboardType}
      onChangeText={(text) => {
        setValue(text);
        props.onChangeText(text);
      }}
    />
  );
};

export default FBARNButton;
