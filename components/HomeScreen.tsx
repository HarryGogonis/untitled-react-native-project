import * as React from "react";
import { observer, inject } from "mobx-react";
import {
  Container,
  Header,
  CheckBox,
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

import GoalList from "../state/Goal/GoalList";
import GoalListView from "./GoalListView";

interface ProvidedProps {
  goalList?: GoalList;
}

@inject("goalList")
export default class HomeScreen extends React.Component<ProvidedProps> {
  render() {
    const { goalList } = this.props;

    if (!goalList) {
      throw new Error("HomeScreen not connected to state");
    }

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
          <GoalListView goalList={goalList} />
        </Content>
      </Container>
    );
  }
}
