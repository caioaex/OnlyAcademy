import { View } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";

export function PlansPage() {
	return (
		<View>
			<StripeProvider publishableKey="pk_test_51PNlNP08gspZg6mjYqcs0QigJCT7BIPhw5koPZKoPv7P0lb98jgJNkTkFPmtj6LPppzFh8AsN9ASMIX71VN7EPLi00Xi1f8W7I">

			</StripeProvider>
		</View>
	)
}