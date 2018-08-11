
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Details',
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
          <Text>Enter Details</Text>
           <Button
            title="Return Home"
            onPress={() => this.props.navigation.goBack()}
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
  
  export {DetailsScreen};