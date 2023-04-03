import {Animated, Button} from 'react-native';
import React, {useRef} from 'react';

/* 
  Property란,
  애니메이션을 줄 수 있는 스타일 속성들을 말함
  일반적으로는 opacity, transform - translateX, translateY, scale.. 정도만 지원

  이를 늘려주기 위해선 useNativeDriver:false로 주면 됨 


  보간법이란,
  단일 value 만으로도 다양한 Animation을 만들 수 있음
*/

// height 100 > 200 timing
const AnimatedProperty = () => {
  const heightAnim = useRef(new Animated.Value(100)).current;

  const onPress = () => {
    heightAnim.setValue(100);
    Animated.timing(heightAnim, {
      toValue: 200,
      useNativeDriver: false,
    }).start();
  };
  return (
    <>
      <Button title={'버튼'} onPress={onPress} />
      <Animated.View
        style={{
          width: 100,
          height: heightAnim,
          backgroundColor: heightAnim.interpolate({
            inputRange: [100, 150, 200],
            outputRange: ['tomato', 'midnightblue', 'wheat'],
          }),
          transform: [
            {
              rotate: heightAnim.interpolate({
                inputRange: [100, 200],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </>
  );
};

export default AnimatedProperty;
