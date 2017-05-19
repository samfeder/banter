import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';
export default class FooterTabsExample extends Component {
    render() {
        return (
            <View style={style.container}>
                <Content />
                <Footer >
                    <FooterTab>
                        <Button light full>
                            <Text link>Add Friends</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    };
}

const style = {
  container: {
  }
}
