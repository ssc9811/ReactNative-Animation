import {View, Animated, Button} from 'react-native';
import React, {useRef} from 'react';

// x -100 decay
const AnimatedDecay = () => {
  const translateXAnim = useRef(new Animated.Value(100)).current;
  const onPress = () => {
    translateXAnim.setValue(100);
    Animated.decay(translateXAnim, {
      velocity: -1,
      // deceleration: 0.997, //기본값
      deceleration: 0.995,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      <Button title="클릭" onPress={() => onPress()} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🚗
      </Animated.Text>
    </View>
  );
};

export default AnimatedDecay;
