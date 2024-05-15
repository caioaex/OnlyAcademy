import React, { useRef } from "react"
import { Container, CameraScreen } from "./style"
import { RNCamera } from "react-native-camera"

export function Camera(){
  const cameraRef = useRef<RNCamera>

  function takePicture(){}

  return(
    <Container>
      <CameraScreen
        style={{flex: 1}} 
        ref={ref => cameraRef}
        captureAudio={false}  
        type={RNCamera.Constants.Type.back}  
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onPictureTaken={takePicture} />
    </Container>
  )
}