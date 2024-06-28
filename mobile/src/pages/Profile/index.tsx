import React, { useEffect, useState } from "react"
import { Body, Header, ImageBackground, ViewImage, MiddleImage, ProfileBody, ProfileCard } from "./style"
import { ButtonIcon } from "../../components/ButtonIcon"
import { supabase } from "../../config/supaBase"

const backgroundImage = require("../../assets/imageBackground.png")

export function Profile() {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase.from('profile').select()
        if (error) console.log(new Error(`${JSON.stringify(error)}`))
        if (!error) setProfile(data[0])
        console.log(profile)
      } catch (e) {
        console.log(e)
      }
    }

    fetchProfile()
  }, [profile])

  return (
    <Body>
      <Header>
        <ImageBackground source={backgroundImage} />
        <ButtonIcon icon={{
          name: "arrow-left",
          color: "black",
          size: 26
        }} />
        <ButtonIcon icon={{
          name: "mail",
          color: "black",
          size: 28
        }} />
      </Header>
      <ViewImage>
        <MiddleImage source={backgroundImage} />
      </ViewImage>
      <ProfileBody>
        <ProfileCard>

        </ProfileCard>
      </ProfileBody>
    </Body>
  )
}
