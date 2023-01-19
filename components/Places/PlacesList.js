import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../Constants/colors";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>No places added yet</Text>
      </View>
    );
  }

  const navigation = useNavigation();
  function selectPlaceHandler(id) {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <PlaceItem place={item} onSelect={selectPlaceHandler} />;
      }}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallBackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallBackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
