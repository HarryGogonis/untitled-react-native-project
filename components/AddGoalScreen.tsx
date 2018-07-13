import * as React from "react";
import { inject } from "mobx-react";
import { Container, Content, Text } from "native-base";
import { NavigationDescriptor } from "react-navigation";

import GoalList from "../state/Goal/GoalList";

interface ProvidedProps {
  goalList?: GoalList;
}

@inject("goalList")
export default class AddGoalScreen extends React.Component<ProvidedProps> {
  static navigationOptions = {
    title: "Add New Goal"
  };

  render() {
    const { goalList } = this.props;

    if (!goalList) {
      throw new Error("AddGoalScreen not connected to state");
    }

    return (
      <Container>
        <Content>
          <Text>Hello world!</Text>
        </Content>
      </Container>
    );
  }
}
