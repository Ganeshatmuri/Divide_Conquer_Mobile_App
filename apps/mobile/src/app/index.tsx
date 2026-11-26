
import CalculatorButton from '@/components/calculator/CalculatorButton';
import { calculate, factorial, squareRoot } from '@/utils/calculator';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleBackspace = () => {
    if (display === "Error" || isCalculated) {
      setDisplay("0");
      setIsCalculated(false);
      return;
    }

    if (
      display.length === 1 ||
      (display.length === 2 && display.startsWith("-"))
    ) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handleFactorial = () => {
    if (display === "Error") return;

    try {
      const result = factorial(Number(display));

      setDisplay(String(result));
      setFirstNumber(null);
      setOperator(null);
      setIsCalculated(true);
    } catch (error) {
      setDisplay("Error");
      setFirstNumber(null);
      setOperator(null);
      setIsCalculated(true);
    }
  };

  const handleSquareRoot = () => {
    if (display === "Error") return;

    try {
      const result = squareRoot(Number(display));

      setDisplay(String(result));
      setFirstNumber(null);
      setOperator(null);
      setIsCalculated(true);
    } catch (error) {
      setDisplay("Error");
      setFirstNumber(null);
      setOperator(null);
      setIsCalculated(true);
    }
  };

  const handleOperator = (selectedOperator: string) => {
    if (display === "Error") return;

    if (firstNumber !== null && operator !== null && !isCalculated) {
      const first = Number(firstNumber);
      const second = Number(display);

      let result = 0;

      switch (operator) {
        case "+":
          result = first + second;
          break;
        case "-":
          result = first - second;
          break;
        case "*":
          result = first * second;
          break;
        case "/":
          if (second === 0) {
            setDisplay("Error");
            setFirstNumber(null);
            setOperator(null);
            setIsCalculated(true);
            return;
          }
          result = first / second;
          break;
        case "%":
          result = first % second;
          break;
      }

      setDisplay(String(result));
      setFirstNumber(String(result));
    } else {
      setFirstNumber(display);
    }

    setOperator(selectedOperator);
    setDisplay("0");
    setIsCalculated(false);
  };

  const handleNumber = (number: string) => {
    if (isCalculated || display === "Error" || display === "0") {
      setDisplay(number);
      setIsCalculated(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleDecimal = () => {
    if (isCalculated || display === "Error") {
      setDisplay("0.");
      setIsCalculated(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setIsCalculated(false);
  };

  const handleCalculate = () => {
    if (firstNumber === null || operator === null) return;

    const first = Number(firstNumber);
    const second = Number(display);

    try {
      const result = calculate(first, second, operator);

      setDisplay(String(result));
      setFirstNumber(null);
      setOperator(null);
      setIsCalculated(true);
    } catch (error) {
      setDisplay("Error");
      setFirstNumber(null);
      setOperator(null);
      setIsCalculated(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Divide and Conquer</Text>
      <Text style={styles.subtitle}>Developed by Ganesh Atmuri</Text>

      <Text style={styles.display}>{display || "0"}</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <CalculatorButton label="C" onPress={handleClear} type="clear" />
          <CalculatorButton label="⌫" onPress={handleBackspace} />
          <CalculatorButton label="%" onPress={() => handleOperator("%")} type="operator" />
          <CalculatorButton label="/" onPress={() => handleOperator("/")} type="operator" />
        </View>

        <View style={styles.buttonRow}>
          <CalculatorButton label="7" onPress={() => handleNumber("7")} />
          <CalculatorButton label="8" onPress={() => handleNumber("8")} />
          <CalculatorButton label="9" onPress={() => handleNumber("9")} />
          <CalculatorButton label="*" onPress={() => handleOperator("*")} type="operator" />
        </View>

        <View style={styles.buttonRow}>
          <CalculatorButton label="4" onPress={() => handleNumber("4")} />
          <CalculatorButton label="5" onPress={() => handleNumber("5")} />
          <CalculatorButton label="6" onPress={() => handleNumber("6")} />
          <CalculatorButton label="-" onPress={() => handleOperator("-")} type="operator" />
        </View>

        <View style={styles.buttonRow}>
          <CalculatorButton label="1" onPress={() => handleNumber("1")} />
          <CalculatorButton label="2" onPress={() => handleNumber("2")} />
          <CalculatorButton label="3" onPress={() => handleNumber("3")} />
          <CalculatorButton label="+" onPress={() => handleOperator("+")} type="operator" />
        </View>

        <View style={styles.buttonRow}>
          <CalculatorButton label="0" onPress={() => handleNumber("0")} />
          <CalculatorButton label="." onPress={handleDecimal} />
          <CalculatorButton label="!" onPress={handleFactorial} type="operator" />
          <CalculatorButton label="√" onPress={handleSquareRoot} type="operator" />
          <CalculatorButton label="=" onPress={handleCalculate} type="equals" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17191F',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    color: '#A0A0A0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: -30,
    marginBottom: 40,
  },
  display: {
    color: '#FFFFFF',
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
});
