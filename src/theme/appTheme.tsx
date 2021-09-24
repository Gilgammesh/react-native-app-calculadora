import {StyleSheet} from 'react-native';
import {
  BgCalculadora,
  txtColorError,
  txtColorOperaciones,
  txtColorResultado,
} from '../configs/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgCalculadora,
  },
  pantalla: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  textoResultado: {
    color: txtColorResultado,
    fontSize: 76,
    textAlign: 'right',
    maxHeight: 100,
  },
  textoOperaciones: {
    color: txtColorOperaciones,
    fontSize: 30,
    textAlign: 'right',
  },
  textoError: {
    color: txtColorError,
    fontSize: 40,
    textAlign: 'right',
  },
  botones: {
    flex: 2,
    paddingBottom: 40,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
