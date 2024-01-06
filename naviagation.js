import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
// import { createNativeStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";

import Feed from "./screens/tabScreens/Feed";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";

//Stack 
const HomeStack = createNativeStackNavigator();
//Tab bottom
const Tab = createBottomTabNavigator();

function HomeStackGroup (){
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name = "Feed" component={Feed}/>
            <HomeStack.Screen name = "HomeStackScreen" component={TweetDetailScreen}/>
        </HomeStack.Navigator>
    )
}

function TabGroup() {
    return (
        <Tab.Navigator
        screenOptions={({route, navigation}) => ({
            tabBarIcon:({color, focused, size}) =>{
                let iconName;
                // size = 20;

                if(route.name === 'Home'){
                    iconName = focused? 'home':'home-outline';
                }
                else if (route.name === 'Setting'){
                    iconName = focused? 'settings' :'settings-outline'
                }
                else if (route.name === 'Notification'){
                    iconName = focused? 'notifications' :'notifications-outline'
                }
                return <Ionicons name = {iconName} size = {size} color = {color}/>
            }
        })}
        
        >
            <Tab.Screen name="Home" component={Feed} />
            <Tab.Screen name="Setting" component={Settings} />
            <Tab.Screen name="Notification" component={Notifications} />

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