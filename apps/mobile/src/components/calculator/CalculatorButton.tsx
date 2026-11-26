
import { Pressable, StyleSheet, Text } from 'react-native';

type CalculatorButtonProps = {
    label: string;
    onPress: () => void;
    type?: 'number' | 'operator' | 'clear' | 'equals';

};

export default function CalculatorButton({
    label,
    onPress,
    type = 'number',
}:CalculatorButtonProps) {
    return (
        <Pressable style={[styles.button, styles[type]]}  onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#343B4A',
    padding: 20,
    flex: 1,
    borderRadius: 14,
    alignItems: 'center',

    // Glossy border and shadow
    borderWidth: 1,
    borderColor: '#596477',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },

  number: {
    backgroundColor: '#343B4A',
    borderColor: '#596477',
  },

  operator: {
    backgroundColor: '#F59E0B',
    borderColor: '#FFD166',
  },

  clear: {
    backgroundColor: '#E04444',
    borderColor: '#FF8585',
  },

  equals: {
    backgroundColor: '#16A36A',
    borderColor: '#5BE0A5',
  },
});
