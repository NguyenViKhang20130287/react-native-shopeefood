import * as React from 'react';
import MainContainer from './src/navigation/MainContainer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      {/* <StatusBar backgroundColor='white' barStyle='dark-content' /> */}
      <MainContainer />
    </>
  );
}