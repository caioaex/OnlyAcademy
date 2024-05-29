import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
        	<Stack.Screen name="Home" component={ Home } />
       	 	<Stack.Screen name="Profile" component={ Profile }/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}