import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class ListThumbnailExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail
                              square
                              size={80}
                              source={require('../images/avatar_large.png')} />
                            <Body>
                                <Text>Shujon</Text>
                                <Text note>AMC Networks</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail
                              square
                              size={80}
                              source={require('../images/avatar_large.png')} />
                            <Body>
                                <Text>Fillbot 🤖</Text>
                                <Text note>Romphim LLC</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../images/avatar_large.png')} />
                            <Body>
                                <Text>Mom</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../images/avatar_large.png')} />
                            <Body>
                                <Text>Dad</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
