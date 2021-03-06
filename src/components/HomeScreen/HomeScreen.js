import React, {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TVMenuControl,
  BackHandler,
  Platform,
} from 'react-native';
import Styles from './Styles';
import data from './Data';
import {IdStore} from '../../../Store';
import {observer} from 'mobx-react';
const HomeScreen = observer(() => {
  const showDetails = data;

  const backAction = useCallback(() => {
    IdStore.changeShowPressedId(null);
  }, []);

  const focusAction = useCallback(id => {
    IdStore.changeShowFocusedId(id);
  }, []);

  const onPressAction = useCallback(id => {
    IdStore.changeShowPressedId(id);
  }, []);

  useEffect(() => {
    TVMenuControl.enableTVMenuKey();
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      TVMenuControl.disableTVMenuKey();
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  return (
    <View style={Styles.MainViewStyles}>
      {showDetails.map(i => (
        <View key={i.id} style={Styles.ConatierViewStyles}>
          <TouchableOpacity
            onFocus={() => {
              focusAction(i.id);
              backAction();
            }}
            hasTVPreferredFocus={i.id === 0 ? true : false}
            onPress={() => onPressAction(i.id)}
            activeOpacity={Platform.isTVOS ? 1.0 : 0.5}
            style={[
              Styles.ImageButtonStyles,
              {borderWidth: IdStore.showFocusedId === i.id ? 10 : 0},
            ]}>
            <Image
              source={{uri: i?.imgUrl}}
              style={Styles.ImageStyles}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text key={i.id} style={Styles.TextStyles}>
            {IdStore.showPressedId === i.id ? i.showName : ' '}
          </Text>
        </View>
      ))}
    </View>
  );
});
export default HomeScreen;
