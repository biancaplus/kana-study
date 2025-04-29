import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, AppState, Animated } from "react-native";
import FlipInCard from "../components/FlipInCard";
import AllList from "../assets/data/AllList";
import { KanaItem } from "@/types/interfaces";
import { useFocusEffect } from "expo-router";

export default function Practice() {
  const Yojijukugo = [
    "因果応報",
    "一期一会",
    "風林火山",
    "海千山千",
    "三日天下",
    "朝三暮四",
    "一刀両断",
    "悪事千里",
    "悪口雑言",
    "異口同音",
    "以心伝心",
    "一意専心",
    "一石二鳥",
    "一挙両得",
  ];
  const [selectIndex, setSelectIndex] = useState(1);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [test, setTest] = useState<KanaItem>(AllList[0]);
  const [displayText, setDisplayText] = useState<string>("");
  const [answer, setAnswer] = useState(test.romaji);
  const [answerList, setAnswerList] = useState<string[][]>([]);
  const [time, setTime] = useState("00:00:00");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef(Date.now());
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const shuffle = <T,>(arr: T[]) =>
    arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  const chunkArray = (arr: string[], size: number): string[][] => {
    const result: string[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const generateQuestion = () => {
    const testKana = AllList[Math.floor(Math.random() * AllList.length)];
    setTest(testKana);
    setAnswer(testKana.romaji);

    if (!test) {
      setTest(testKana);
      setAnswer(testKana.romaji);
      setDisplayText(testKana.hiragana);
    } else {
      animateHiraganaChange(testKana);
    }

    const options = [testKana.romaji];
    while (options.length < 8) {
      const random = AllList[Math.floor(Math.random() * AllList.length)].romaji;
      if (!options.includes(random)) {
        options.push(random);
      }
    }

    const shuffled = shuffle(options);
    const chunked = chunkArray(shuffled, 4);
    setAnswerList(chunked);
    // animateHiraganaChange(testKana);
  };

  const handleAnswer = (selected: string) => {
    setTotal((prev) => prev + 1);

    if (selected === answer) {
      setCorrect((prev) => prev + 1);

      const nextTotal = total + 1;
      if (nextTotal % 10 === 0) {
        setSelectIndex((prev) => (prev + 1) % Yojijukugo.length);
      }

      generateQuestion();
    } else {
      setIncorrect((prev) => prev + 1);
    }
  };

  const resetAll = () => {
    setSelectIndex(1);
    setTotal(0);
    setCorrect(0);
    setIncorrect(0);
    setTime("00:00:00");
    startTimeRef.current = Date.now();
    generateQuestion();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      const diff = Date.now() - startTimeRef.current;
      const hrs = Math.floor(diff / 3600000)
        .toString()
        .padStart(2, "0");
      const mins = Math.floor((diff % 3600000) / 60000)
        .toString()
        .padStart(2, "0");
      const secs = Math.floor((diff % 60000) / 1000)
        .toString()
        .padStart(2, "0");
      setTime(`${hrs}:${mins}:${secs}`);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const animateHiraganaChange = (next: KanaItem) => {
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setDisplayText(next.hiragana);
      setTest(next);
      setAnswer(next.romaji);
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      resetAll();
      startTimer();

      return () => {
        stopTimer();
      };
    }, [])
  );

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.text1}>{Yojijukugo[selectIndex].slice(0, 2)}</Text>
        <Text style={[styles.text1, styles.text2]}>
          {Yojijukugo[selectIndex].slice(2)}
        </Text>
      </View>
      <View style={styles.scorebox}>
        <Text style={styles.text3}>
          {correct}/{total}
        </Text>
        <Text style={styles.text3}> | </Text>
        <Text style={styles.text3}>{time}</Text>
      </View>
      <View style={styles.testbox}>
        <Animated.Text
          style={[styles.text4, { transform: [{ scale: scaleAnim }] }]}
        >
          {displayText}
        </Animated.Text>
      </View>
      <View style={styles.buttonbox}>
        {answerList.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonrow}>
            {row.map((item, index) => (
              <FlipInCard
                key={index}
                text={item}
                answer={answer}
                onPress={() => handleAnswer(item)}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  textbox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text1: {
    fontSize: 54,
    textAlign: "center",
    fontFamily: "YujiSyuku",
    color: "#34495E",
  },
  text2: {
    color: "#3498DB",
  },
  scorebox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text3: {
    fontSize: 20,
    fontFamily: "OpenSans",
  },
  testbox: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  text4: {
    fontSize: 100,
    fontFamily: "YujiSyuku",
  },
  buttonbox: {
    alignItems: "center",
    gap: 10,
  },
  buttonrow: {
    flexDirection: "row",
    gap: 10,
  },
});
