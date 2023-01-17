import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";

function AllPlaces({ route }) {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currPlace) => [...currPlace, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList styles={styles.rootContainer} places={loadedPlaces} />;
}

export default AllPlaces;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
});
