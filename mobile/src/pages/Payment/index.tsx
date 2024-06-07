import { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

const API_URL = "http://10.0.2.2:4000/pay"

export function Payment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  async function pagarAssinatura(assinatura: string) {
    fetch(`${API_URL}/${assinatura}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",

        }
    })
      .then(response => {
        if (response.status == 401) console.error(`Unauthorized: ${JSON.stringify(response.body)}`)
      })
        .then(data=> {
            console.log(data)
        })
      .catch(e => {console.error(e)})
  }

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <TouchableOpacity
          onPress={() => pagarAssinatura("mensal")}
          style={{ backgroundColor: 'blue', marginTop: 50, width: 120 }}>
        <Text>Plano Mensal</Text>
      </TouchableOpacity>
    </View>
  )
}
