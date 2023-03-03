import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";

import Home from "./pages/Home";
import ChecklistInfo from "./pages/ChecklistInfo";
import CreateChecklist from "./pages/CreateChecklist";
import { Paragraph } from './components';
import { GlobalProvider } from "./context/useFormReport";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const HeaderStyle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <GlobalProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#9fe801',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#121212',
            height: 60
          },
        }}>
        <Tab.Screen
          name="Home"
          component={TabStack}
          options={{
            headerTitle: () => {
              return (
                <HeaderStyle>
                  <Paragraph text='🐮' fontSize='30px' bold />
                  <Paragraph text='Bov Control' fontSize='30px' color='#9fe801' bold />
                </HeaderStyle>
              )
            },
            headerTitleStyle: {
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#121212',
            },
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <MaterialIcons name="home" size={40} color={color} />
              }
              return <MaterialIcons name="home" size={40} color='#6b6b6b' />
            }
          }}
        />
        <Tab.Screen
          name="Cria Checklist"
          component={CreateChecklist}
          options={{
            headerTitle: () => {
              return (
                <HeaderStyle>
                  <Paragraph text='🐮' fontSize='30px' bold />
                  <Paragraph text='Bov Control' fontSize='30px' color='#9fe801' bold />
                </HeaderStyle>
              )
            },
            headerTitleStyle: {
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#121212'
            },
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <MaterialIcons name="playlist-add" size={40} color={color} />
              }
              return <MaterialIcons name="playlist-add" size={40} color='#6b6b6b' />
            }
          }}
        />
      </Tab.Navigator>
    </GlobalProvider>
  );
}

const Stack = createNativeStackNavigator()

function TabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChecklistInfo"
        component={ChecklistInfo}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}