import React, { useRef, useState } from "react"
import { Container } from "./style"
import { CameraView, CameraPictureOptions, useCameraPermissions, CameraType } from 'expo-camera';
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { ButtonIcon } from "../ButtonIcon";

export function Camera() {
  let camera: CameraView
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  function toggleCamera() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takePicture() {
    console.log('teste')
    const data = await camera.takePictureAsync()
    console.log(data)
  }

  return (
    <Container style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        facing={facing}
      >
        <View style={{ flexDirection: "row" }}>
          <ButtonIcon onPress={() => takePicture} icon={{ name: 'camera', size: 24, color: 'black' }} />
          <ButtonIcon onPress={() => toggleCamera} icon={{ name: 'instagram', size: 24, color: 'black' }} />
        </View>
      </CameraView>
    </Container>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    alignItems: 'flex-end'
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20
  }
});
