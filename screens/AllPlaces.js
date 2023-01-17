import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

function AllPlaces() {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      // console.log(places);
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);
  return <PlacesList styles={styles.rootContainer} places={loadedPlaces} />;
}

export default AllPlaces;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
