import React, { useRef, useState } from "react"
import { Container } from "./style"
import { Camera, CameraType, ImageType } from 'expo-camera/legacy';
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { ButtonIcon } from "../ButtonIcon";
import { supabase } from "../../config/supaBase";
import * as FileSystem from 'expo-file-system';

export function Camera_({ navigation }) {
  let camera: Camera
  const [permission, requestPermission] = Camera.useCameraPermissions();

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
    const fileName = `${Date.now()}.jpg`

    const arraybuffer = await fetch(photo.uri).then((res) => res.arrayBuffer())

    const mimeType = 'image/png';
    const { data, error } = await supabase
      .storage
      .from('images')
      .upload(`images/${fileName}`, arraybuffer, {
        cacheControl: "36000",
        upsert: false,
        contentType: mimeType
      });

    if (error) {
      console.error(`Error: ${error}`)
    } else {
      console.log("Deu certo! ", data)
      navigation.navigate("Home")
    }
  }

  return (
    <Container style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        ref={r => { camera = r }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
          <ButtonIcon onPress={() => takePicture()} icon={{ name: 'camera', size: 24, color: 'black' }} />
        </View>
      </Camera>
    </Container>
  )
}
