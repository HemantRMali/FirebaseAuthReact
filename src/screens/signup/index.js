import React, {Component, useState} from 'react';
import {View, Text, Button, Dimensions, SafeAreaView} from 'react-native';
import FloatingLabelInput from 'react-native-floating-label-input';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FBARNTextInput
          label="Email"
          onChangeText={(value) => setEmail(value)}
        />
        <FBARNTextInput
          label="Password"
          isSecure={true}
          onChangeText={(value) => setPassword(value)}
        />
        <FBARNTextInput
          label="Confirm Password"
          isSecure={true}
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <FBARNButton
          title="Sign Up"
          onPress={() => props.navigation.navigate('Signup')}
        />
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.noAccount}>Already have account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
