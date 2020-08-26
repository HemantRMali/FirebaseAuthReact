import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#595856',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
    marginLeft: 10,
  },
  bottomTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  productImage: {
    aspectRatio: 1,
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titlesContainer: {
    width: '70%',
  },
});
