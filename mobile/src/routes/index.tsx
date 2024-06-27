import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { ChoicePlan } from "../pages/PlanChoices";
import { Payment } from "../pages/Payment";
import { Login } from "../pages/Login";

const Stack = createStackNavigator();

export default function Routes() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ChoicePlan" component={ChoicePlan}/>
          <Stack.Screen name="Payment" component={Payment} />
        	<Stack.Screen name="Home" component={ Home } />
       	 	<Stack.Screen name="Profile" component={ Profile }/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}
