import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function PlaceItem({ imageUri, title, address, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({});
