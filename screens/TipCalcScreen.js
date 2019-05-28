import React from 'react';
import { Button, Picker, Text, TextInput, View, StyleSheet } from 'react-native';


export default class TipCalScreen extends React.Component {
  static navigationOptions = {
    title: 'TipCalc',
  };

  constructor(props) {
    super(props)
    this.state = {
      numberOfPeople: 2,
      price: 0,
      result: 0,
      taxAmount: '95',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementNumberOfPeople = this.incrementNumberOfPeople.bind(this);
  }

  handleChange(number) {
    this.setState({ price: number })
  }

  handleSubmit() {
    let tax = Number(this.state.taxAmount) / 1000;
    let total = this.state.price * (1 + tax);
    this.setState({ result: total })
  }

  incrementNumberOfPeople(upOrDown) {
    //TODO: refactor, pass state in, instead of using function in setState
    //TODO: add error check for if numberOfPeople is negative number, 

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

        <View style={styles.section}><Text> How many people </Text></View>

        <View style={styles.section}>
          <Text>{this.state.numberOfPeople}</Text>
          <Button
            style={{ width: 100 }}
            title='+'
            onPress={() => this.incrementNumberOfPeople('up')}
          >+
          </Button>
          <Button
            style={{ width: 100 }}
            title='-'
            onPress={() => this.incrementNumberOfPeople('down')}
          >-
          </Button>
        </View>

        <View style={styles.section}><Text>How much is the pretax subtotal?</Text></View>

        <View style={styles.section}>
          <TextInput
            onChangeText={(text) => this.handleChange(text)}
            keyboardType={'numeric'}
          />
        </View>

        <View style={styles.section}><Text>Choose State Tax</Text></View>

        <View>
          <Picker
            selectedValue={this.state.taxAmount}
            style={{height: 120, width: 100}}
            onValueChange={(itemValue, itemIndex) => {
              console.log('itemValue ==>', itemValue);
              this.setState({taxAmount: itemValue})
            }
          }>
            <Picker.Item label="CA - 9.5%" value="95" />
            <Picker.Item label="NY" value="100" />
            <Picker.Item label="NJ" value="70" />
          </Picker>
        </View>

        <Text>{this.state.result}</Text>

        <View style={styles.section}>
          <Button
            title="Calculate"
            onPress={this.handleSubmit}
          >
          </Button>
        </View>

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
  section: {
    flex: 1,
    color: 'red',
    justifyContent: 'center',
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  }
});
