import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {formatDecimal, normalizarNumber} from '../helpers/format';
import {limitNumbers} from '../configs/constants';

const useCalculadora = () => {
	const [lastNumber, setLastNumber] = useState<string>('');
	const [lastNumberShow, setLastNumberShow] = useState<string>('');
	const [result, setResult] = useState<string>('0');
	const [resultShow, setResultShow] = useState<string>('0');
	const [isOperacion, setIsOperacion] = useState<boolean>(false);
	const [operador, setOperador] = useState<string>('');
	const [hasError, setHasError] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const limpiar = () => {
		setLastNumber('');
		setLastNumberShow('');
		setResult('0');
		setResultShow('0');
		setIsOperacion(false);
		setOperador('');
		setHasError(false);
		setError('');
	};

	const construirResultado = (txt: string) => {
		if (hasError) {
			setLastNumber('');
			setLastNumberShow('');
			setResult(txt);
			setResultShow(txt);
			setIsOperacion(false);
			setOperador('');
			setHasError(false);
			setError('');
			return;
		}
		if (isOperacion) {
			setIsOperacion(false);
			setResult(txt);
			setResultShow(txt);
			return;
		} else {
			if (normalizarNumber(result).length < limitNumbers) {
				if (result === '0' || result === '-0') {
					if (txt === '.') {
						setResult(`${result === '0' ? '' : '-'}0${txt}`);
						setResultShow(`${result === '0' ? '' : '-'}0${txt}`);
					} else {
						setResult(`${result === '0' ? '' : '-'}${txt}`);
						setResultShow(`${result === '0' ? '' : '-'}${txt}`);
					}
				} else {
					if (txt === '.' && result.includes('.')) return;
					if (result.includes('.')) {
						const entera: string = result.split('.')[0];
						const decimal: string = result.split('.')[1];
						if (result.slice(0, 1) === '-') {
							setResult(`${result}${txt}`);
							setResultShow(
								`${entera === '-0' ? '-' : ''}${formatDecimal(`${entera}`)}.${decimal}${txt}`
							);
						} else {
							setResult(`${result}${txt}`);
							setResultShow(`${formatDecimal(`${entera}`)}.${decimal}${txt}`);
						}
					} else {
						if (txt === '.') {
							setResult(`${result}${txt}`);
							setResultShow(`${formatDecimal(`${result}${txt}`)}.`);
						} else {
							setResult(`${result}${txt}`);
							setResultShow(`${formatDecimal(`${result}${txt}`)}`);
						}
					}
				}
			}
			return;
		}
	};

	const positivoNegativo = () => {
		if (result.includes('.')) {
			const entera: string = result.split('.')[0];
			const decimal: string = result.split('.')[1];
			if (result.slice(0, 1) === '-') {
				setResult(result.slice(1));
				setResultShow(`${formatDecimal(`${entera.slice(1)}`)}.${decimal}`);
			} else {
				setResult(`-${result}`);
				setResultShow(`-${formatDecimal(`${entera}`)}.${decimal}`);
			}
		} else {
			if (result.slice(0, 1) === '-') {
				setResult(result.slice(1));
				setResultShow(`${formatDecimal(result.slice(1))}`);
			} else {
				setResult(`-${result}`);
				setResultShow(`-${formatDecimal(result)}`);
			}
		}
	};

	const backSpace = () => {
		if (result === '0' || result === '-0') return;
		if (result.slice(0, 1) === '-') {
			if (result.length === 2) {
				limpiar();
				return;
			}
		} else {
			if (result.length === 1) {
				limpiar();
				return;
			}
		}
		if (result.includes('.')) {
			const entera: string = result.split('.')[0];
			const decimal: string = result.split('.')[1];
			if (result.slice(-1) === '.') {
				if (result.slice(0, 1) === '-') {
					setResult(entera);
					setResultShow(`${entera === '-0' ? '-' : ''}${formatDecimal(entera)}`);
				} else {
					setResult(entera);
					setResultShow(`${formatDecimal(entera)}`);
				}
			} else {
				if (result.slice(0, 1) === '-') {
					setResult(result.slice(0, -1));
					setResultShow(`${entera === '-0' ? '-' : ''}${formatDecimal(entera)}.${decimal.slice(0, -1)}`);
				} else {
					setResult(result.slice(0, -1));
					setResultShow(`${formatDecimal(entera)}.${decimal.slice(0, -1)}`);
				}
			}
		} else {
			setResult(result.slice(0, -1));
			setResultShow(`${formatDecimal(result.slice(0, -1))}`);
		}
	};

	const operacion = (operador_: string) => {
		if (operador === '=') {
			if (operador_ === '=') return;
			setLastNumberShow(`${resultShow} ${operador_} `);
			setIsOperacion(true);
			setOperador(operador_);
		} else {
			if (operador === '÷' && Math.abs(Number(result)) === 0 && !hasError) {
				setHasError(true);
				setError('No se puede realizar la división entre cero!!!');
				return;
			}
			let resultado: number = 0;
			let show: string;
			if (lastNumber === '') {
				resultado = Number(result);
				show = resultShow;
			} else {
				if (operador === '+') {
					resultado = Number(lastNumber) + Number(result);
				}
				if (operador === '−') {
					resultado = Number(lastNumber) - Number(result);
				}
				if (operador === '×') {
					resultado = Number(lastNumber) * Number(result);
				}
				if (operador === '÷') {
					resultado = Number(lastNumber) / Number(result);
				}
				show = `${lastNumberShow}${resultShow}`;
			}
			setLastNumber(`${resultado}`);
			setLastNumberShow(`${show} ${operador_} `);
			setResult(`${resultado}`);
			setResultShow(`${formatDecimal(`${resultado}`)}`);
			setIsOperacion(true);
			setOperador(operador_);
		}
	};

	return {
		lastNumber,
		lastNumberShow,
		result,
		resultShow,
		isOperacion,
		operador,
		hasError,
		error,
		limpiar,
		construirResultado,
		positivoNegativo,
		backSpace,
		operacion
	};
};

export default useCalculadora;
