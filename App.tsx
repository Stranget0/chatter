import { ApolloProvider } from "@apollo/client";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import widlarzClient from "./lib/api";
import { UserProvider } from "./utils/contexts/user";
import { useLoadFonts } from "./utils/hooks/loadFonts";
import Rooms from "./views/Rooms";
import Chat from "./views/Chat";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";

const disableHeader = { header: () => null };

export default function App() {
  const fontsLoaded = useLoadFonts();
  if (!fontsLoaded) return <AppLoading />;
  const Stack = createNativeStackNavigator<ParamList>();

  return (
    <ApolloProvider client={widlarzClient}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Rooms"
              component={Rooms}
              // TODO implement header with context
              options={disableHeader}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={disableHeader}
            />
            <Stack.Screen
              name="Login"
              component={LogIn}
              options={disableHeader}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={disableHeader}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </ApolloProvider>
  );
}
