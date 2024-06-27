import React, {useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { supabase } from "../../config/supaBase"

export function Home({navigation}){
  const [posts, setPosts] = useState()

  useEffect(() => {
    const teste = async () => {
      try {
        const {data, error} = await supabase.from('profile').select()
        if(error) console.log(new Error(`${JSON.stringify(error)}`))
        if(!error) console.log(`Profile: ${JSON.stringify(data)}`)
      } catch(e) {
        console.log(e)
      } 
    }

    teste()
  })

  return(
    <View>
      <Text>Teste home</Text>
      <Button title="Profile" onPress={() => {navigation.navigate("Profile")}}></Button>
    </View>
  )
}
