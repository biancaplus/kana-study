import { Text as RNText, TextProps } from "react-native";

export const Text = (props: TextProps) => (
  <RNText {...props} style={[{ fontFamily: "OpenSans" }, props.style]} />
);

export default Text;
