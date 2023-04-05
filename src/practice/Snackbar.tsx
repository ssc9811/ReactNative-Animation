import {Text, Animated, Button, Easing} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// https://oblador.github.io/react-native-vector-icons/
const Snackbar = () => {
  const transYAnim = useRef(new Animated.Value(100)).current;

  const onPress = () => {
    transYAnim.setValue(100);
    Animated.sequence([
      Animated.timing(transYAnim, {
        toValue: -40,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.out(Easing.circle),
      }),
      Animated.delay(1300),
      Animated.timing(transYAnim, {
        toValue: 100,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.in(Easing.circle),
      }),
    ]).start();
  };
  return (
    <>
      <Button title="클릭" onPress={onPress} />
      <Animated.View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          width: '90%',
          justifyContent: 'center',
          backgroundColor: '#222',
          paddingVertical: 10,
          marginHorizontal: 20,
          borderRadius: 10,
          transform: [{translateY: transYAnim}],
        }}>
        <Icon name="warning" size={30} color={'#fff'} />
        <Text style={{fontSize: 20, marginLeft: 8, color: '#fff'}}>
          Snackbar
        </Text>
      </Animated.View>
    </>
  );
};

export default Snackbar;
