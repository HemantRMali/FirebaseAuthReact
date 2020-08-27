import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
import {isValidEmail, isValidPassword} from '../../methods';
import ScreenTitle from '../../components/ScreenTitle';
import Loader from '../../components/Loader';

import auth from '@react-native-firebase/auth';

/**
 * This component is used to handled user registration and validations activity.
 * @param {*} props
 */

export const showAlert = (message) => {
  setTimeout(() => {
    Alert.alert(message);
  }, 500);
};

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const registerUser = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        props.navigation.navigate('Dashboard');
      })
      .catch((error) => {
        console.log('error:', error);
        if (error.code === 'auth/email-already-in-use') {
          showAlert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          showAlert('That email address is invalid!');
        }
        if (error.code === 'auth/weak-password') {
          showAlert('The given password is invalid');
        }
        setLoading(false);
      });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Loader isTransparent={true} loading={isLoading} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          <ScreenTitle title="Register" />
          <FBARNTextInput
            label="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
          <FBARNTextInput
            label="Password"
            value={password}
            isSecure={true}
            onChangeText={(value) => setPassword(value)}
          />
          <FBARNTextInput
            label="Confirm Password"
            value={confirmPassword}
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
                Alert.alert('Invalid inputs');
              }
            }}
          />
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.noAccount}>Already have account? Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
