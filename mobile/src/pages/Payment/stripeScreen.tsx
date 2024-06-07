import { StripeProvider } from "@stripe/stripe-react-native";
import { CheckoutScreen } from ".";

const publishableKey = process.env.PUBLISHABLE_KEY

export function stripeScreen(){
  return(
    <StripeProvider publishableKey={publishableKey}>
      <CheckoutScreen />
    </StripeProvider>
  )
}