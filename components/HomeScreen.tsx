import * as React from "react";
import { observer, inject } from "mobx-react";
import { Container, Content, Button, Icon, Text } from "native-base";
import { NavigationDescriptor } from "react-navigation";

import GoalList from "../state/Goal/GoalList";
import GoalListView from "./GoalListView";

interface ProvidedProps {
  goalList?: GoalList;
}

@inject("goalList")
export default class HomeScreen extends React.Component<ProvidedProps> {
  static navigationOptions = ({ navigation }: NavigationDescriptor) => ({
    title: "Home",
    headerRight: (
      <Button transparent onPress={() => navigation.navigate("AddGoal")}>
        <Text>Add</Text>
      </Button>
    )
  });

  render() {
    const { goalList } = this.props;

    if (!goalList) {
      throw new Error("HomeScreen not connected to state");
    }

    return (
      <Container>
        <Content>
          <GoalListView goalList={goalList} />
        </Content>
      </Container>
    );
  }
}
