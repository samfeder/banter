import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppHeader from './components/AppHeader';
import UserList from './components/UserList';
import Footer from './components/Footer';
import { Container } from 'native-base';

export default class App extends React.Component {

  async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
  }

  render() {
    return (
      <Container>
        <AppHeader></AppHeader>
        <ScrollView style={styles.container}>
          <UserList></UserList>
        </ScrollView>
        <Footer></Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
