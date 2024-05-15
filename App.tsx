import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Profile } from './src/pages/Profile';
import { Camera } from './src/components/Camera';

export function App() {
 return(
  <SafeAreaView>
    <Camera />
  </SafeAreaView>
  );
}
