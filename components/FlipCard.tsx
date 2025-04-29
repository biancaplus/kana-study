import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  Platform,
} from "react-native";
import { Text } from "../components/StyledText";
import { KanaItem } from "../types/interfaces";

interface FlipCardProps {
  item: KanaItem;
  widthPercentage: ViewStyle["width"];
}

const FlipCard: React.FC<FlipCardProps> = ({ item, widthPercentage }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [flipped, setFlipped] = useState(false);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = () => {
    if (flipped) {
      Animated.spring(animatedValue, {
        toValue: 0,
        useNativeDriver: true,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        useNativeDriver: true,
        friction: 8,
        tension: 10,
      }).start();
    }
    setFlipped(!flipped);
  };

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={[styles.cardContainer, { width: widthPercentage }]}>
        {!item.isDuplicate && (
          <>
            <Animated.View
              style={[
                styles.itemBox,
                styles.front,
                { transform: [{ rotateX: frontInterpolate }] },
              ]}
            >
              <View style={styles.textRow}>
                <Text style={styles.text1}>{item.hiragana} </Text>
                <Text style={styles.text1}>{item.katakana}</Text>
              </View>
              <Text style={styles.text2}>{item.romaji}</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.itemBox,
                styles.back,
                { transform: [{ rotateX: backInterpolate }] },
              ]}
            >
              <Text>{item.phoneticSymbol}</Text>
            </Animated.View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // width: "18%",
    height: 45,
  },
  itemBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  front: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  back: {
    // borderWidth: 1,
    // borderColor: "#C8C8C8",
    backgroundColor: "#ffe08a",
    transform: [{ rotateX: "180deg" }],
  },
  textRow: {
    flexDirection: "row",
    marginBottom: -5,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 22,
    // fontFamily: "YujiSyuku",
    fontFamily: Platform.select({
      ios: "YujiSyuku",
      android: "YujiSyuku, sans-serif",
      default: "YujiSyuku",
    }),
  },
  text2: {
    fontSize: 12,
  },
});

export default FlipCard;
