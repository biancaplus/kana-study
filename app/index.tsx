import React from "react";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import SeionList from "../assets/data/SeionList";

export default function index() {
  return (
    <View style={styles.container}>
      {SeionList.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(
            (item, index) =>
              item && (
                <FlipCard key={index} item={item} widthPercentage={"18%"} />
              )
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
