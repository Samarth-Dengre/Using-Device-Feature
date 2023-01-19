import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../Constants/colors";
import { fetchPlaceDetails } from "../util/database";

function PlaceDetails({ route, navigation }) {
  const [placeDetails, setPlaceDetails] = useState();
  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: placeDetails.lat,
      initialLng: placeDetails.lng,
    });
  }
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {
    async function loadPlaceData() {
      const details = await fetchPlaceDetails(selectedPlaceId);
      setPlaceDetails(details);
      navigation.setOptions({
        title: details.title,
      });
    }
    loadPlaceData();
  }, [selectedPlaceId]);
  if (!placeDetails) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Loading place data...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: placeDetails.imageUri }} />
      <View style={styles.locationCOntainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{placeDetails.address}</Text>
        </View>
        <OutlinedButton name="map" onPress={showOnMapHandler}>
          View On Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationCOntainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
