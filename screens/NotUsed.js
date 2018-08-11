import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions= Platform.select({
  ios: '123',
  android: '2303'
});

class NotUsed extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#00ced1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Diary</Text>
          <Button
            title="Add details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Example Table"
            onPress={() => this.props.navigation.navigate('Table')}
          />
        </View>
      );
    }
  }
  

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
  export { NotUsed };