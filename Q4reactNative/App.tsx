import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';
import data from './Data'; 


const App = () => {
  return (
    <View style={styles.container}>
      {data.map((number) => (
        <Square key={number} number={number} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export default App;
