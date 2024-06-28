import React, { useRef, useState } from "react"
import { Container } from "./style"
import { Camera, CameraType, ImageType } from 'expo-camera/legacy';
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { ButtonIcon } from "../ButtonIcon";
import { supabase } from "../../config/supaBase";
import * as FileSystem from 'expo-file-system';

export function Camera_() {
  let camera: Camera
  
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [image, setImage] = useState()

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
    const photo = await camera.takePictureAsync({ quality: 1, base64: true, exif: false })
    const fileName = photo.uri.split('/').pop();

    const fileInfo = await FileSystem.getInfoAsync(photo.uri)

    if (fileInfo.exists) {
      const fileBase64 = await FileSystem.readAsStringAsync(photo.uri, { encoding: FileSystem.EncodingType.Base64 });
      const mimeType = 'image/jpeg';
    const { data, error } = await supabase
      .storage
      .from('images')
      .upload(`images/${fileName}`, fileBase64, {
        cacheControl: "36000",
        upsert: false,
        contentType: mimeType
      });

      if(error) {
        console.error('Deu erro!', error)
      } else {
        console.log("Deu certo! ", data)
      }
    }
  }

  return (
    <Container style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        ref={r => { camera = r }}
      >
        <View style={{ flexDirection: "row" }}>
          <ButtonIcon onPress={() => takePicture()} icon={{ name: 'camera', size: 24, color: 'black' }} />
        </View>
      </Camera>
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
