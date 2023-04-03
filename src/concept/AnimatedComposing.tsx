import {Animated, Button} from 'react-native';
import React, {useRef} from 'react';

/*
한 함수에서 두개 이상의 애니메이션이 호출되면 애니메이션은 비동기로 동작함
결합 함수를 활용하면 동기처럼 작동되게 할 수 있음

결합 함수
  sequence()  : 비동기 애니메이션을 동기로 작동하게 해주는 함수
  delay()     : 결합함수에서만 사용할 수 있는 함수 => Animated.delay(1000)
  parallel()  : 다수의 애니메이션을 그룹으로 묶어주는 함수
  stagger(delay, [animations..])   : 다수의 애니메이션 사이 일관된 delay를 줄 수 있는 함수  
*/

// 1) y -200 > 0 timing
// 2) x 0 > 100 timing

const AnimatedComposing = () => {
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(-200)).current;

  const onPress = () => {
    translateXAnim.setValue(0);
    translateYAnim.setValue(-200);
    // Animated.sequence([
    //   Animated.timing(translateYAnim, {
    //     toValue: 0,
    //     useNativeDriver: true,
    //   }),
    //   // Animated.delay(1000),
    //   Animated.timing(translateXAnim, {
    //     toValue: 100,
    //     useNativeDriver: true,
    //   }),
    // ]).start();

    Animated.stagger(1000, [
      Animated.timing(translateYAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      // Animated.delay(1000),
      Animated.timing(translateXAnim, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <>
      <Button title="버튼" onPress={onPress} />
      <Animated.Text
        style={{
          fontSize: 60,
          transform: [
            {translateX: translateXAnim},
            {translateY: translateYAnim},
          ],
        }}>
        ₩
      </Animated.Text>
    </>
  );
};

export default AnimatedComposing;
