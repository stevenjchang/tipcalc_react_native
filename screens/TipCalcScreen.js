import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default class TipCalScreen extends React.Component {
  static navigationOptions = {
    title: 'TipCalc',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Total Cost of Meal </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{height: 40}}
          // placeholder="Type here to translate!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
