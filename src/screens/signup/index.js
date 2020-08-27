import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';
import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
import {isValidEmail, isValidPassword} from '../../methods';
import auth from '@react-native-firebase/auth';

/**
 * This component is used to handled user registration and validations activity.
 * @param {*} props
 */

export const showAlert = (message) => {
  Alert.alert(message);
};

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        showAlert('User account created & signed in!');
        props.navigation.navigate('Dashboard');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          showAlert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          showAlert('That email address is invalid!');
        }
      });
  };
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
          onPress={() => {
            if (
              isValidEmail(email) &&
              isValidPassword(password) &&
              isValidPassword(confirmPassword)
            ) {
              if (password === confirmPassword) {
                registerUser();
              } else {
                Alert.alert('Password and confirm password does not match');
              }
            } else {
              Alert.alert('In valid inputs');
            }
          }}
        />
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.noAccount}>Already have account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
