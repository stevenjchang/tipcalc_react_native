import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class TipCalScreen extends React.Component {
  static navigationOptions = {
    title: 'TipCalc',
  };

  constructor(props) {
    super(props)
    this.state = {
      numberOfPeople: 2,
      price: 0,
      result: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementNumberOfPeople = this.incrementNumberOfPeople.bind(this);
  }

  handleChange(number) {
    this.setState({ price: number })
  }

  handleSubmit() {
    this.setState((state,) => ({ result: state.price * 1.5 }))
  }

  incrementNumberOfPeople(upOrDown) {
    if (upOrDown === 'up') {
      this.setState((state) => ({ numberOfPeople: state.numberOfPeople += 1 }))
    }
    if (upOrDown === 'down') {
      this.setState((state) => ({ numberOfPeople: state.numberOfPeople -= 1 }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> How many people </Text>
        <Text>{this.state.numberOfPeople}</Text>
        {/* <TextInput
          value={this.state.numberOfPeople}
        /> */}
        <Button
          title='increase Number of People'
          onPress={() => this.incrementNumberOfPeople('up')}
        >+
        </Button>
        <Button
          title='decrease Number of People'
          onPress={() => this.incrementNumberOfPeople('down')}
        >+
        </Button>

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
