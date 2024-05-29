import React from "react"
import { Body, Header, ImageBackground, ViewImage, MiddleImage, ProfileBody, ProfileCard } from "./style"
import { IconButton } from "../../components/ButtonIcon"

const backgroundImage = require("../../assets/imageBackground.png")

export function Profile() {
  return(
    <Body>
      <Header>
        <ImageBackground source={backgroundImage}/>
        <IconButton icon={{
          name: "arrow-left",
          color: "black",
          size: 26 }} />
        <IconButton icon={{
        name: "mail",
        color: "black",
        size: 28 }} />
      </Header>
      <ViewImage>
        <MiddleImage  source={backgroundImage}/>
      </ViewImage>
      <ProfileBody>
        <ProfileCard>
          
        </ProfileCard>
      </ProfileBody>
    </Body>
  )
}
