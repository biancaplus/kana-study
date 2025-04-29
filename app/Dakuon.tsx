import React from "react";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import DakuonList from "../assets/data/DakuonList";

export default function Dakuon() {
  return (
    <View style={styles.container}>
      {DakuonList.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, index) => (
            <FlipCard key={index} item={item} widthPercentage={"18%"} />
          ))}
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
