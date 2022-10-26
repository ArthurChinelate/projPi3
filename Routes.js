import { createNativeStackNavigator } from '@react-navigation/native-stack'

import  Feed  from '../Pages/Feed'
import  Login  from '../Pages/Login'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            
            <Stack.Screen 
                name ="Login"
                component={Login}
                options={{ headerShown: false}}
            />
            <Stack.Screen 
                name ="Feed"
                component={ Feed }
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}
