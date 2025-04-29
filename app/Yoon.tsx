import React from "react";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import YoonList from "../assets/data/YoonList";

export default function Yoon() {
  return (
    <View style={styles.container}>
      {YoonList.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(
            (item, index) =>
              item && (
                <FlipCard key={index} item={item} widthPercentage={"30%"} />
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
