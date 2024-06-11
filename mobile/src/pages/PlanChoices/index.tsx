import { useEffect, useState } from "react";
import {StripeProvider, useStripe} from "@stripe/stripe-react-native";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import {Index} from "../Payment";


export function ChoicePlan() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  return (
    <StripeProvider publishableKey="pk_test_51PNlNP08gspZg6mjYqcs0QigJCT7BIPhw5koPZKoPv7P0lb98jgJNkTkFPmtj6LPppzFh8AsN9ASMIX71VN7EPLi00Xi1f8W7I">
          <Index />
    </StripeProvider>
  )
}
