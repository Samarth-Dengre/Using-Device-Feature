import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
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
