import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  MainViewStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171725',
    flexDirection: 'row',
  },
  ConatierViewStyles: {flex: 1, alignItems: 'center'},
  ImageButtonStyles: {
    height: '50%',
    width: '50%',
    borderColor: 'orange',
  },
  ImageStyles: {
    height: '100%',
    width: '100%',
  },
  TextStyles: {fontSize: 30, color: 'white'},
});

export default Styles;
