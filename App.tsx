import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimatedComponent from './src/concept/AnimatedComponent';
import AnimateValued from './src/concept/AnimatedTiming';
import AnimatedTiming from './src/concept/AnimatedTiming';
import AnimatedSpring from './src/concept/AnimatedSpring';
import AnimatedDecay from './src/concept/AnimatedDecay';
import AnimatedComposing from './src/concept/AnimatedComposing';
import AnimatedOtherMethod from './src/concept/AnimatedOtherMethod';
import AnimatedProperty from './src/concept/AnimatedProperty';
import Snackbar from './src/practice/Snackbar';
import DrawerMenu from './src/practice/DrawerMenu';

function App(): JSX.Element {
  return (
    <SafeAreaView
      // style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      style={{flex: 1}}>
      {/* concept components */}
      {/* <AnimatedComponent /> */}
      {/* <AnimateValued /> */}
      {/* <AnimatedTiming /> */}
      {/* <AnimatedSpring /> */}
      {/* <AnimatedDecay /> */}
      {/* <AnimatedComposing /> */}
      {/* <AnimatedOtherMethod /> */}
      {/* <AnimatedProperty /> */}
      {/* <Snackbar /> */}
      <DrawerMenu />
    </SafeAreaView>
  );
}

export default App;
