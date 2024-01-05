import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Screens/Feed";

//Tab bottom

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Feed2" component={Feed} />
            <Tab.Screen name="Feed3" component={Feed} />
            <Tab.Screen name="Feed4" component={Feed} />
        </Tab.Navigator>
    )
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup></TabGroup>
        </NavigationContainer>
    )
}