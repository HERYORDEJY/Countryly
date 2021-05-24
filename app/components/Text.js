import React, { Children } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import normzer from '../utils/normalizer';

export default function _Text({
  children,
  textType = 'regular',
  textStyle,
  text,
  fontSize = 20,
  color = '#000',
  ...props
}) {
  return (
    <Text
      {...props}
      style={[
        { ...style[textType] },
        // { fontSize: fontSize ? normzer(fontSize) : null },
        { color: color },
        textStyle,
      ]}
    >
      {children}
    </Text>
  );
}
export const styleJoiner = (...args) => StyleSheet.flatten(args);
const style = StyleSheet.create({
  regular: {
    fontFamily: 'Garamond-Regular',
    fontSize: normzer(20),
    color: '#000',
  },
  bold: {
    fontFamily: 'Garamond-Bold',
    fontSize: normzer(20),
    color: '#000',
  },
  narrow: {
    fontFamily: 'Garamond Narrow',
    fontSize: normzer(20),
    color: '#000',
  },
  italic: {
    fontFamily: 'Garamond Narrow Italic',
    fontSize: normzer(20),
    color: '#000',
  },
});
