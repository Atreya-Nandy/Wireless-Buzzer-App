import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class App extends Component {
componentDidMount() {
  console.log("Atreya Nandy's Wireless Buzzer App")
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          Component Lifecycle
        </Text>
      </View>
    );
  }
}
