import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Square = ({ number }) => {
  return (
    <TouchableOpacity 
      style={styles.square} 
      onPress={() => alert(`This is square number ${number}`)}
    >
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'skyblue', 
    borderRadius: 5, 
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default Square;
