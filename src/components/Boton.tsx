import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  btnBgColorDefault,
  btnHeight,
  btnTxtColorDefault,
  btnTxtSize,
  btnWidth,
} from '../configs/constants';

interface IProps {
  text?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  bgColor?: string;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
}

interface ISProps {
  fontSize?: number;
  width?: number;
  height?: number;
  bgColor?: string;
  color?: string;
}

const Boton = (props: IProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props?.onPress}
      disabled={props?.disabled ? props.disabled : false}>
      <View style={styles(props).container}>
        <Text style={styles(props).texto}>{props?.text ? props.text : ''}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = ({
  bgColor = btnBgColorDefault,
  color = btnTxtColorDefault,
  fontSize = btnTxtSize,
  width = btnWidth,
  height = btnHeight,
}: ISProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      borderRadius: height * 0.5,
    },
    texto: {
      color: color,
      fontSize: fontSize,
      fontWeight: 'bold',
    },
  });
