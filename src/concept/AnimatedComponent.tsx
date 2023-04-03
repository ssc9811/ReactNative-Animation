import {View, Button, Animated} from 'react-native';
import React, {useRef} from 'react';

const AnimatedComponent = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const onXPress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const onOPress = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  console.log('fadeAnim', fadeAnim);
  return (
    <View>
      <Button title="O" onPress={() => onOPress()} />
      <Button title="X" onPress={() => onXPress()} />
      <Animated.Text style={{fontSize: 60, opacity: fadeAnim}}>₩</Animated.Text>
    </View>
  );
};

export default AnimatedComponent;
