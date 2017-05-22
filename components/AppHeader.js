import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Left, Right, Body, Title } from 'native-base';
export default class AppHeader extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Left />
                    <Body>
                        <Title>Bantr</Title>
                    </Body>
                    <Right />
                </Header>
            </View>
        );
    }
}
