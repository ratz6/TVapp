import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TVMenuControl,
  BackHandler,
} from 'react-native';
import Styles from './Styles';
import data from './Data';

const HomeScreen = () => {
  const showDetails = data;
  const [showfocused, setShowFocusedId] = useState(null);
  const [showPressed, setShowPressedId] = useState(undefined);

  const backAction = useCallback(() => {
    setShowPressedId(null);
  }, []);

  const focusAction = useCallback(id => {
    setShowFocusedId(id);
  }, []);

  const onPressAction = useCallback(id => {
    setShowPressedId(id);
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
            onPress={() => onPressAction(i.id)}
            style={[
              Styles.ImageButtonStyles,
              {borderWidth: showfocused === i.id ? 10 : 0},
            ]}>
            <Image
              source={{uri: i?.imgUrl}}
              style={Styles.ImageStyles}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text key={i.id} style={Styles.TextStyles}>
            {showPressed === i.id ? i.showName : ''}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default HomeScreen;
