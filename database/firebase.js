import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBzdFOZ-sUwtEBIFroU8SKWtaHhtYXPVlo',
  authDomain: 'reactnativefirebase-00000.firebaseapp.com',
  databaseURL: 'https://reactnativefirebase-00000.firebaseio.com',
  projectId: 'fir-authrn-ccff3',
  storageBucket: 'reactnativefirebase-00000.appspot.com',
  messagingSenderId: '000000000000000',
  appId: '1:355826973890:ios:fea1326391e076ac61cf5b',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
