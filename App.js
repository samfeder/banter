import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader';
import UserList from './components/UserList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader></AppHeader>
        <UserList></UserList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
