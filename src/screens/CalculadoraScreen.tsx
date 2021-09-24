import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Boton from '../components/Boton';
import {styles} from '../theme/appTheme';
import {
  BgCalculadora,
  btnBgColorDisabled,
  btnBgColorDefault,
  btnBgColorNumber,
  btnBgColorOperacion,
  btnTxtColorDisabled,
  btnTxtColorDefault,
  btnTxtColorNumber,
  btnTxtColorOperacion,
  btnTxtSize_,
} from '../configs/constants';
import useCalculadora from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    lastNumberShow,
    resultShow,
    hasError,
    error,
    limpiar,
    construirResultado,
    positivoNegativo,
    backSpace,
    operacion,
  } = useCalculadora();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={BgCalculadora} barStyle="light-content" />
      <View style={styles.pantalla}>
        <Text
          style={styles.textoOperaciones}
          numberOfLines={3}
          adjustsFontSizeToFit>
          {lastNumberShow}
        </Text>
        <Text
          style={hasError ? styles.textoError : styles.textoResultado}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {hasError ? error : resultShow}
        </Text>
      </View>
      <View style={styles.botones}>
        <View style={styles.row}>
          <Boton text="C" onPress={limpiar} />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorDefault}
            text="+/-"
            fontSize={20}
            color={hasError ? btnTxtColorDisabled : btnTxtColorDefault}
            onPress={positivoNegativo}
            disabled={hasError}
          />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorDefault}
            text="<-"
            color={hasError ? btnTxtColorDisabled : btnTxtColorDefault}
            onPress={backSpace}
            disabled={hasError}
          />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorOperacion}
            text="÷"
            fontSize={btnTxtSize_}
            color={hasError ? btnTxtColorDisabled : btnTxtColorOperacion}
            onPress={() => operacion('÷')}
            disabled={hasError}
          />
        </View>
        <View style={styles.row}>
          <Boton
            bgColor={btnBgColorNumber}
            text="7"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('7')}
          />
          <Boton
            bgColor={btnBgColorNumber}
            text="8"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('8')}
          />
          <Boton
            bgColor={btnBgColorNumber}
            text="9"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('9')}
          />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorOperacion}
            text="×"
            fontSize={btnTxtSize_}
            color={hasError ? btnTxtColorDisabled : btnTxtColorOperacion}
            onPress={() => operacion('×')}
            disabled={hasError}
          />
        </View>
        <View style={styles.row}>
          <Boton
            bgColor={btnBgColorNumber}
            text="4"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('4')}
          />
          <Boton
            bgColor={btnBgColorNumber}
            text="5"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('5')}
          />
          <Boton
            bgColor={btnBgColorNumber}
            text="6"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('6')}
          />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorOperacion}
            text="−"
            fontSize={btnTxtSize_}
            color={hasError ? btnTxtColorDisabled : btnTxtColorOperacion}
            onPress={() => operacion('−')}
            disabled={hasError}
          />
        </View>
        <View style={styles.row}>
          <Boton
            bgColor={btnBgColorNumber}
            text="1"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('1')}
          />
          <Boton
            bgColor={btnBgColorNumber}
            text="2"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('2')}
          />
          <Boton
            bgColor={btnBgColorNumber}
            text="3"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('3')}
          />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorOperacion}
            text="+"
            fontSize={btnTxtSize_}
            color={hasError ? btnTxtColorDisabled : btnTxtColorOperacion}
            onPress={() => operacion('+')}
            disabled={hasError}
          />
        </View>
        <View style={styles.row}>
          <Boton
            width={180}
            bgColor={btnBgColorNumber}
            text="0"
            color={btnTxtColorNumber}
            onPress={() => construirResultado('0')}
          />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorNumber}
            text="."
            color={hasError ? btnTxtColorDisabled : btnTxtColorNumber}
            onPress={() => construirResultado('.')}
            disabled={hasError}
          />
          <Boton
            bgColor={hasError ? btnBgColorDisabled : btnBgColorOperacion}
            text="="
            fontSize={btnTxtSize_}
            color={hasError ? btnTxtColorDisabled : btnTxtColorOperacion}
            onPress={() => operacion('=')}
            disabled={hasError}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculadoraScreen;
