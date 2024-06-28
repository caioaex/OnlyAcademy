import React, {useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { supabase } from "../../config/supaBase"
import { Camera } from "../../components/Camera"

export function Home({ navigation }){
  const [posts, setPosts] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const {data, error} = await supabase.from('posts').select()
        if(error) console.log(new Error(`${JSON.stringify(error)}`))
        if(!error) console.log(`Profile: ${JSON.stringify(data)}`)
      } catch(e) {
        console.log(e)
      } 
    }

    fetchPosts()
  }, [posts])

  return(
    <View>
      <Text>Teste home</Text>
      <Button title="Camera" onPress={() => {navigation.navigate("Camera")}}></Button>
    </View>
  )
}
