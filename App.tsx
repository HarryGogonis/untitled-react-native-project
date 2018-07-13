import * as React from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Title,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Icon
} from "native-base";

import Goal from "./Goal";

export default class App extends React.Component<{}> {
  render() {
    const goals: Goal[] = [new Goal("Foo")];
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {goals.map((goal: Goal) => (
              <ListItem>
                <Text>goal.title</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
