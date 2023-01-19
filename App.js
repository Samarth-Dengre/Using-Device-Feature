import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./Constants/colors";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import Map from "./screens/Map";
import { init } from "./util/database";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import PlaceDetails from "./screens/PlaceDetails";
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        init().then(() => {
          setAppIsReady(true);
        });
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
              headerTintColor: Colors.gray700,
              contentStyle: {
                backgroundColor: Colors.gray700,
              },
            }}
          >
            <Stack.Screen
              name="AllPlaces"
              component={AllPlaces}
              options={({ navigation }) => ({
                title: "Your Favorite Places",
                headerRight: ({ tintColor }) => {
                  return (
                    <IconButton
                      name="add"
                      size={30}
                      color={tintColor}
                      onPress={() => {
                        navigation.navigate("AddPlace");
                      }}
                    />
                  );
                },
              })}
            />
            <Stack.Screen
              name="AddPlace"
              component={AddPlace}
              options={{
                title: "Add a new Place",
              }}
            />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen
              name="PlaceDetails"
              component={PlaceDetails}
              options={{ title: "Loading Place..." }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
