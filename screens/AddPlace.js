import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";
function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    const places = await insertPlace(place);
    navigation.navigate("AllPlaces");
  }
  return (
    <View style={styles.container}>
      <PlaceForm onCreatePlace={createPlaceHandler} />
    </View>
  );
}

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
