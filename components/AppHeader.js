import React, { Component } from 'react';
import { Container, Text, Header, Left, Right, Body, Title } from 'native-base';
export default class AppHeader extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Bantr</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}
