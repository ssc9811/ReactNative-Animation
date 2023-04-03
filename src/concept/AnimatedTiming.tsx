import {View, Button, Animated, Easing, Image, Dimensions} from 'react-native';
import React, {useRef} from 'react';

/* 
  - Animated.timing : 가장 대중적이고 쉽게 접하는 애니메이션
  - Animated.spring : 선택 옵션이 다양해서 여러 스프링 모델을 구현할 수 있는 spring 애니메이션
  - Animated.decay : 감소하는 값을 이용한 애니메이션
*/

// Easing ease / back / bounce / elastic / circle
// https://easings.net/
const AnimatedTiming = () => {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  const onPress = () => {
    translateXAnim.setValue(-100);
    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      delay: 0,
      // easing: Easing.in(Easing.ease),
      // easing: Easing.in(Easing.back(5)),
      // easing: Easing.out(Easing.back(5)),
      // easing: Easing.inOut(Easing.back(5)),
      // easing: Easing.in(Easing.bounce),
      // easing: Easing.out(Easing.elastic(2)),
      easing: Easing.out(Easing.circle), // 가장 선호하는 애니메이션
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Image
        source={{
          uri: 'https://user-images.githubusercontent.com/39263149/229419529-323eab8b-9dd2-4608-a516-3bf7b289a155.png',
        }}
        style={{width: Dimensions.get('window').width, height: 400}}
        resizeMode="contain"
      />
      <Button title="move" onPress={() => onPress()} />
      <Animated.Text
        style={{fontSize: 60, transform: [{translateX: translateXAnim}]}}>
        ₩
      </Animated.Text>
    </View>
  );
};

export default AnimatedTiming;
