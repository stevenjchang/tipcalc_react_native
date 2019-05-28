import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class TipCalScreen extends React.Component {
  static navigationOptions = {
    title: 'TipCalc',
  };

  constructor(props) {
    super(props)
    this.state = {
      price: 0,
      result: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(number) {
    this.setState({ price: number })
  }

  handleSubmit() {
    this.setState((state,) => ({ result: state.price * 1.5 }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Total Cost of Meal </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{height: 40}}
          placeholder="Enter total meal cost"
          onChangeText={(number) => this.handleChange(number)}
        />
        <Button
          title="calculate"
          onPress={this.handleSubmit}
        >Calculate</Button>
        <Text>{this.state.result}</Text>
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
