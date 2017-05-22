import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class ListThumbnailExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../images/avatar_large.png')} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../images/avatar_large.png')} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
