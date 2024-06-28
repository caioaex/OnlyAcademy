import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/config/AuthProvider';
import  Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>

  );
}
