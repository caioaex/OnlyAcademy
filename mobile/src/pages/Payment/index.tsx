import { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

const API_URL = "http://localhost:4000/pay"

export function Payment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  async function pagarAssinatura(assinatura: string) {
    axios.post(`${API_URL}/${assinatura}`)
      .then(response => console.log(response.data))
      .catch(e => {
        e.request
          ? console.error("Erro de request: " + JSON.stringify(e.request))
          : console.error("Erro de response: " + JSON.stringify(e.response))
      }).finally()
  }

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <TouchableOpacity onPress={() => pagarAssinatura("mensal")} style={{ backgroundColor: 'blue', marginTop: 50 }}>
        <Text>Plano Mensal</Text>
      </TouchableOpacity>
    </View>
  )
}
