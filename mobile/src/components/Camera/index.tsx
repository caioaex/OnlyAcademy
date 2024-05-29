import React, { useRef } from "react"
import { Container } from "./style"
import { RNCamera } from "react-native-camera"
import { Button } from "react-native"

export function Camera(){
  const cameraRef = useRef<RNCamera>

  function takePicture(){

  }

  return(
    <Container style={{flex: 1}}>
      <RNCamera
        style={{flex: 1}} 
        ref={ref => cameraRef}
        captureAudio={false}  
        type={RNCamera.Constants.Type.back} />
    </Container>
  )
}
