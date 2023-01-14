import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
function AddPlace() {
  return (
    <View style={styles.container}>
      <PlaceForm />
    </View>
  );
}

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
