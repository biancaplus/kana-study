import { KanaItem } from "../../types/interfaces";

const SeionList: KanaItem[][] = [
  [
    { hiragana: "あ", katakana: "ア", romaji: "a", phoneticSymbol: "[ä]" },
    { hiragana: "い", katakana: "イ", romaji: "i", phoneticSymbol: "[i]" },
    { hiragana: "う", katakana: "ウ", romaji: "u", phoneticSymbol: "[ɯ̹]" },
    { hiragana: "え", katakana: "エ", romaji: "e", phoneticSymbol: "[e̞]" },
    { hiragana: "お", katakana: "オ", romaji: "o", phoneticSymbol: "[o̞]" },
  ],
  [
    { hiragana: "か", katakana: "カ", romaji: "ka", phoneticSymbol: "[kä]" },
    { hiragana: "き", katakana: "キ", romaji: "ki", phoneticSymbol: "[kʲi]" },
    { hiragana: "く", katakana: "ク", romaji: "ku", phoneticSymbol: "[kɯ̹]" },
    { hiragana: "け", katakana: "ケ", romaji: "ke", phoneticSymbol: "[ke̞]" },
    { hiragana: "こ", katakana: "コ", romaji: "ko", phoneticSymbol: "[ko̞]" },
  ],
  [
    { hiragana: "さ", katakana: "サ", romaji: "sa", phoneticSymbol: "[sä]" },
    { hiragana: "し", katakana: "シ", romaji: "shi", phoneticSymbol: "[ɕi]" },
    { hiragana: "す", katakana: "ス", romaji: "su", phoneticSymbol: "[sɯ̹̈]" },
    { hiragana: "せ", katakana: "セ", romaji: "se", phoneticSymbol: "[se̞]" },
    { hiragana: "そ", katakana: "ソ", romaji: "so", phoneticSymbol: "[so̞]" },
  ],
  [
    { hiragana: "た", katakana: "タ", romaji: "ta", phoneticSymbol: "[tä]" },
    { hiragana: "ち", katakana: "チ", romaji: "chi", phoneticSymbol: "[t͡ɕi]" },
    { hiragana: "つ", katakana: "ツ", romaji: "tsu", phoneticSymbol: "[t͡sɯ̹̈]" },
    { hiragana: "て", katakana: "テ", romaji: "te", phoneticSymbol: "[te̞]" },
    { hiragana: "と", katakana: "ト", romaji: "to", phoneticSymbol: "[to̞]" },
  ],
  [
    { hiragana: "な", katakana: "ナ", romaji: "na", phoneticSymbol: "[nä]" },
    { hiragana: "に", katakana: "ニ", romaji: "ni", phoneticSymbol: "[nʲi]" },
    { hiragana: "ぬ", katakana: "ヌ", romaji: "nu", phoneticSymbol: "[nɯ̹]" },
    { hiragana: "ね", katakana: "ネ", romaji: "ne", phoneticSymbol: "[ne̞]" },
    { hiragana: "の", katakana: "ノ", romaji: "no", phoneticSymbol: "[no̞]" },
  ],
  [
    { hiragana: "は", katakana: "ハ", romaji: "ha", phoneticSymbol: "[hä]" },
    { hiragana: "ひ", katakana: "ヒ", romaji: "hi", phoneticSymbol: "[çi]" },
    { hiragana: "ふ", katakana: "フ", romaji: "fu", phoneticSymbol: "[Φɯ̹]" },
    { hiragana: "へ", katakana: "ヘ", romaji: "he", phoneticSymbol: "[he̞]" },
    { hiragana: "ほ", katakana: "ホ", romaji: "ho", phoneticSymbol: "[ho̞]" },
  ],
  [
    { hiragana: "ま", katakana: "マ", romaji: "ma", phoneticSymbol: "[mä]" },
    { hiragana: "み", katakana: "ミ", romaji: "mi", phoneticSymbol: "[mʲi]" },
    { hiragana: "む", katakana: "ム", romaji: "mu", phoneticSymbol: "[mɯ̹]" },
    { hiragana: "め", katakana: "メ", romaji: "me", phoneticSymbol: "[me̞]" },
    { hiragana: "も", katakana: "モ", romaji: "mo", phoneticSymbol: "[mo̞]" },
  ],
  [
    { hiragana: "や", katakana: "ヤ", romaji: "ya", phoneticSymbol: "[jä]" },
    {
      hiragana: "い",
      katakana: "イ",
      romaji: "i",
      phoneticSymbol: "[i]",
      isDuplicate: true,
    },
    { hiragana: "ゆ", katakana: "ユ", romaji: "yu", phoneticSymbol: "[jɯ̹]" },
    {
      hiragana: "え",
      katakana: "エ",
      romaji: "e",
      phoneticSymbol: "[e̞]",
      isDuplicate: true,
    },
    { hiragana: "よ", katakana: "ヨ", romaji: "yo", phoneticSymbol: "[jo̞]" },
  ],
  [
    { hiragana: "ら", katakana: "ラ", romaji: "ra", phoneticSymbol: "[ɺä]" },
    { hiragana: "り", katakana: "リ", romaji: "ri", phoneticSymbol: "[ɺʲi]" },
    { hiragana: "る", katakana: "ル", romaji: "ru", phoneticSymbol: "[ɺɯ̹]" },
    { hiragana: "れ", katakana: "レ", romaji: "re", phoneticSymbol: "[ɺe̞]" },
    { hiragana: "ろ", katakana: "ロ", romaji: "ro", phoneticSymbol: "[ɺo̞]" },
  ],
  [
    { hiragana: "わ", katakana: "ワ", romaji: "wa", phoneticSymbol: "[β̞ä]" },
    {
      hiragana: "い",
      katakana: "イ",
      romaji: "ゐ ヰ",
      phoneticSymbol: "[i]",
      isDuplicate: true,
    },
    {
      hiragana: "う",
      katakana: "ウ",
      romaji: "u",
      phoneticSymbol: "[ɯ̹]",
      isDuplicate: true,
    },
    {
      hiragana: "え",
      katakana: "エ",
      romaji: "ゑ ヱ",
      phoneticSymbol: "[e̞]",
      isDuplicate: true,
    },
    { hiragana: "を", katakana: "ヲ", romaji: "wo", phoneticSymbol: "[o̞]" },
  ],
  [
    { hiragana: "ん", katakana: "ン", romaji: "n", phoneticSymbol: "[n]" },
    {
      hiragana: "",
      katakana: "",
      romaji: "",
      phoneticSymbol: "",
      isDuplicate: true,
    },
    {
      hiragana: "",
      katakana: "",
      romaji: "",
      phoneticSymbol: "",
      isDuplicate: true,
    },
    {
      hiragana: "",
      katakana: "",
      romaji: "",
      phoneticSymbol: "",
      isDuplicate: true,
    },
    {
      hiragana: "",
      katakana: "",
      romaji: "",
      phoneticSymbol: "",
      isDuplicate: true,
    },
  ],
];

export default SeionList;
