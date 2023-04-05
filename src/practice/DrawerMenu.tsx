import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Feather';

const DrawerMenu = () => {
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window');

  const onOpenPress = () => {
    console.log('onOpenPress');
    Animated.timing(translateXAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
      easing: Easing.out(Easing.circle),
    }).start();
  };

  const onClosePress = () => {
    console.log('onClosePress');
    Animated.timing(translateXAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 600,
      easing: Easing.out(Easing.circle),
    }).start();
  };
  return (
    <>
      {/* Menu */}
      <Animated.View
        style={{
          backgroundColor: 'white',
          width: '90%',
          height: '100%',
          position: 'absolute',
          bottom: 0,
          zIndex: 10,
          transform: [
            {
              translateX: translateXAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-width * 0.9, 0],
              }),
            },
          ],
        }}>
        <TouchableOpacity
          onPress={onClosePress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{fontSize: 20, paddingHorizontal: 20, paddingVertical: 10}}>
            Menu{' '}
          </Text>
          <Icon name="x" size={30} onPress={onClosePress} />
        </TouchableOpacity>
        <Text
          style={{fontSize: 20, paddingHorizontal: 20, paddingVertical: 10}}>
          Menu{' '}
        </Text>
        <Text
          style={{fontSize: 20, paddingHorizontal: 20, paddingVertical: 10}}>
          Menu{' '}
        </Text>
      </Animated.View>

      {/* Menu BG*/}
      <TouchableWithoutFeedback onPress={onClosePress}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            bottom: 0,
            position: 'absolute',
            backgroundColor: '#00000090',
            zIndex: translateXAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 5],
            }),
          }}
        />
      </TouchableWithoutFeedback>

      {/* Home */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#aff100',
          zIndex: 1,
          width: '100%',
          height: '100%',
        }}>
        <View style={{alignItems: 'flex-end'}}>
          <Icon name="more-vertical" size={30} onPress={() => onOpenPress()} />
        </View>
      </View>
    </>
  );
};

export default DrawerMenu;
