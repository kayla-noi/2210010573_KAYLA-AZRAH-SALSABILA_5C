import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Komponen lainnya */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
});

export default App;
