requestAnimationFrame;
import {View, Animated, Button} from 'react-native';
import React, {useRef} from 'react';

/*
  Animated 사칙연산 메소드
    add, subtract, divide, multiply
  Animated 핸들러 메소드
    start, reset, loop
*/

const AnimatedOtherMethod = () => {
  const value1 = new Animated.Value(100);
  const value2 = new Animated.Value(30);

  console.log(
    Animated.add(value1, value2),
    Animated.subtract(value1, value2),
    Animated.divide(value1, value2),
    Animated.multiply(value1, value2),
    // value1 + value2, 단순 계산은 안됨
  );

  const opacityAnim = useRef(new Animated.Value(1)).current;

  const onPress = () => {
    /* Animation 이후 행동 적용 가능
     Animated.timing(opacityAnim, {
       toValue: 0,
       useNativeDriver: true,
     }).start(finish => console.log(finish)); */
    // -----------------------
    /* Animation reset 활용 
     Animated.timing(opacityAnim, {
       toValue: 0,
       useNativeDriver: true,
     }).start(finish => {
       if (finish) {
         setTimeout(() => {
           // 아래 둘의 동작은 동일, opacityAnim.resetAnimation() 가 더 깔끔함
           // 1) opacityAnim.resetAnimation();
           // 2) Animated.timing(opacityAnim, {
           //   toValue: 0,
           //   useNativeDriver: true,
           // }).reset();
         }, 2000);
       }
     });
     // -----------------------
     /* */
    Animated.loop(
      Animated.timing(opacityAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      // 반복 횟수
      {iterations: 5},
    ).start();
  };

  return (
    <View>
      <Button title="버튼" onPress={onPress} />
      <Animated.Text
        style={{
          fontSize: 60,
          opacity: opacityAnim,
        }}>
        ₩
      </Animated.Text>
    </View>
  );
};

export default AnimatedOtherMethod;
