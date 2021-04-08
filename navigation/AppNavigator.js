import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Colors from '../constants/Colors';


import AboutScreen from '../screens/AboutScreen';
import ChatScreen from '../screens/ChatScreen';
import EditUserScreen from '../screens/EditUserScreen';
import EditDietScreen from '../screens/EditDietScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MyDietScreen from '../screens/MyDietScreen';
import LogoutScreen from '../screens/LogoutScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import UsersScreen from '../screens/UsersScreen';
import VideoScreen from '../screens/VideoScreen';


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.white : ''
    },
        headerTintColor: Platform.OS === 'android' ? Colors.primary : Colors.primary
}

const HomeNavigator = createStackNavigator({
    Home: HomeScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const ChatNavigator = createStackNavigator({
    Chat: ChatScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const DietNavigator = createStackNavigator({
    Diet: MyDietScreen,
    EditDiet: EditDietScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const VideoNavigator = createStackNavigator({
    Video: VideoScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});


const ScheduleNavigator = createStackNavigator({
    Schedule: ScheduleScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const AboutNavigator = createStackNavigator({
    About: AboutScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const UsersNavigator = createStackNavigator({
    Users: UsersScreen,
    EditUser: EditUserScreen,
    EditDiet: EditDietScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const ProfileNavigator = createStackNavigator({
    Profile: MyProfileScreen,
    EditUser: EditUserScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const LogoutNavigator = createStackNavigator({
    Logout: LogoutScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const LoginNavigator = createStackNavigator({
    Login: LoginScreen,
}, {
    defaultNavigationOptions: defaultNavOptions
});


const AppNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    MyProfile: ProfileNavigator,
    MyDiet: DietNavigator,
    Users:  UsersNavigator,
    About: AboutNavigator,
    Schedule: ScheduleNavigator,
    Video: VideoNavigator,
    Chat: ChatNavigator,
    Logout: LogoutNavigator
},{
    contentOptions: {
        activeTintColor: Colors.primary
    }
});

const MainNavigator = createSwitchNavigator({
    Login: LoginNavigator,
    App : AppNavigator
});


export default createAppContainer(MainNavigator);