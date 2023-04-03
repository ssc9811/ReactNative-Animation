import {View, Animated, Button} from 'react-native';
import React, {useRef} from 'react';

// setValue();
// addListener(callback);
// removeAllListener();
// stopAnimation();
// resetAnimation();
// setOffset();
// extractOffset();

// 왼 > 오 x 값이 변화하는 애니메이션
const AnimateValued = () => {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  const onPress = () => {
    translateXAnim.setValue(-100);
    translateXAnim.addListener(value => console.log(value));

    // 멈춤
    // setTimeout(() => {
    //   translateXAnim.stopAnimation();
    // }, 500);

    // 초기화
    // setTimeout(() => {
    //   translateXAnim.resetAnimation();
    // }, 500);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // useEffect(() => {
  //   return () => translateXAnim.removeAllListeners();
  // }, []);

  return (
    <View>
      <Button title="move" onPress={() => onPress()} />
      <Animated.Text
        style={{fontSize: 60, transform: [{translateX: translateXAnim}]}}>
        ₩
      </Animated.Text>
    </View>
  );
};

export default AnimateValued;
