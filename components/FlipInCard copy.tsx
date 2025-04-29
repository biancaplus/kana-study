import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

interface Props {
  text: string;
  answer: string;
  style?: ViewStyle;
}

const FlipInCard: React.FC<Props> = ({ text, style, answer }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const previousText = useRef(text);
  const [isClicked, setIsClicked] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setIsClicked(false);
    }, [])
  );

  useEffect(() => {
    // 当 text 变化时重新播放动画
    if (previousText.current !== text) {
      previousText.current = text;
      startFlipAnimation();
    } else {
      // 首次加载也播放动画
      startFlipAnimation();
    }
  }, [text]);

  const startFlipAnimation = () => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const rotateY = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["90deg", "0deg"],
  });

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{ width: "20%" }}
      activeOpacity={1}
    >
      <Animated.View
        style={[
          styles.card,
          style,
          {
            transform: [{ rotateY }],
            backgroundColor:
              isClicked && text !== answer ? "#EB3C00" : "#00A0E9",
          },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 80,
    // backgroundColor: "#00A0E9",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#999",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    backfaceVisibility: "hidden",
  },
  text: {
    fontSize: 26,
    color: "#fff",
  },
});

export default FlipInCard;
