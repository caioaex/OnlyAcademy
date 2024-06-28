import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { AuthProvider } from './src/config/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>

  );
}
