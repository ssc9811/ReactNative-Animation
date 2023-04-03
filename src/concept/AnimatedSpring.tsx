import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';

// y축 - 100 100 으로 이동하는 spring 애니메이션
/* 
  각 그룹별로 묶여서 사용됨 ( 본인에게 맞는 방식으로 사용 )
  1) 속도를 위주로 핸들링
  bounciness: 8, // 탄력 제어
  speed: 2,

  2) 에너지를 기반으로 핸들링
  friction: 7, // 에너지를 소비
  tension: 40, // 스프리이 어마나 많은 에너지를 가졌는가

  3) 스프링을 체감하면서 핸들링
  stiffness: 100, // 스프링의 강도
  damping: 10, // 마찰력
  mass: 1, // 용수철 끝에 매달려있는 물체의 질량

  //velocity 는 예외
  velocity: 0, // 물체의 초기 속도 (나는 변화를 크게 못 느끼겠음)
*/
const AnimatedSpring = () => {
  const translateYAnim = useRef(new Animated.Value(-100)).current;

  const onPress = () => {
    translateYAnim.setValue(-100);
    Animated.spring(translateYAnim, {
      toValue: 100,

      // bounciness: 1,
      // speed: 12,

      friction: 2,
      tension: 20,

      // stiffness: 100,
      // damping: 2,
      // mass: 10,
      velocity: 20,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Button title="버튼" onPress={() => onPress()} />
      <Animated.Text
        style={{fontSize: 60, transform: [{translateY: translateYAnim}]}}>
        ₩
      </Animated.Text>
    </View>
  );
};

export default AnimatedSpring;
