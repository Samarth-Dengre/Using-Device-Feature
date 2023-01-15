import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./Constants/colors";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import Map from "./screens/Map";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar />
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
