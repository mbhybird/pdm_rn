import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import FunctionGrid from "./FunctionGrid";
import SortableSudokuGridComp from "./SortableSudokuGrid";
import SortableGrid from "../Testing/SortableGrid";
export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {/*
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>Chat App to talk some awesome people!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button full rounded dark
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("Chat")}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button full rounded primary
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("Profile")}>
                        <Text>Goto Profiles</Text>
                    </Button>*/}
                    <SortableSudokuGridComp/>
                </Content>
            </Container>
        );
    }
}
