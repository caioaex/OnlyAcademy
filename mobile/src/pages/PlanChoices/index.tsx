import { useEffect, useState } from "react";
import {StripeProvider, useStripe} from "@stripe/stripe-react-native";
import { Alert, View } from "react-native";
import { Payment } from "../Payment";
import { Button } from "../../components/Button";


export function ChoicePlan({navigation}) {
  return (
    <StripeProvider publishableKey="pk_test_51PNlNP08gspZg6mjYqcs0QigJCT7BIPhw5koPZKoPv7P0lb98jgJNkTkFPmtj6LPppzFh8AsN9ASMIX71VN7EPLi00Xi1f8W7I">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Plano Gratuito" onPress={() => {navigation.navigate('Home')}}></Button>
            <Button title="Plano Mensal" onPress={() => {navigation.navigate('Payment', { plan: 'month', amount: 2500 })}} backgroundColor="red"></Button>
            <Button title="Plano Anual" onPress={() => {navigation.navigate('Payment', {plan: 'year', amount: 15000})}} backgroundColor="blue"></Button>
          </View>
    </StripeProvider>
  )
}
