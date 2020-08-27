import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00000040',
  },
  transparentWrapper: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    display: 'flex',
  },
  viewWrapper: {
    height: '100%',
    width: '100%',
    marginBottom: 20,
  },
  common: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const Loader = (props) => {
  const {
    loading,
    color = 'gray',
    size = 32,
    bgColor = 'transparent',
    isTransparent = true,
  } = props;

  return (
    <>
      {!isTransparent ? (
        <View
          style={[
            styles.viewWrapper,
            styles.common,
            {
              backgroundColor: bgColor,
              display: loading ? 'flex' : 'none',
            },
          ]}>
          {loading && <ActivityIndicator color={color} size={size} />}
        </View>
      ) : (
        <Modal transparent={true} animationType={'none'} visible={loading}>
          <View style={[styles.modalBackground, styles.common]}>
            <View
              style={[
                styles.transparentWrapper,
                styles.common,
                {backgroundColor: bgColor},
              ]}>
              {loading && (
                <ActivityIndicator
                  color={color}
                  size={size}
                  isTransparent={isTransparent}
                />
              )}
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default Loader;
