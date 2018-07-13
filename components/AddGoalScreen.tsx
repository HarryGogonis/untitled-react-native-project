import * as React from "react";
import { inject, observer } from "mobx-react";
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";
import { NavigationDescriptor } from "react-navigation";

import GoalList from "../state/Goal/GoalList";

interface ProvidedProps {
  goalList?: GoalList;
}

interface State {
  description: string;
}

@inject("goalList")
@observer
export default class AddGoalScreen extends React.Component<
  ProvidedProps,
  State
> {
  static navigationOptions = {
    title: "Add New Goal",
    headerRight: (
      <Button transparent onPress={() => {}}>
        <Text>Done</Text>
      </Button>
    )
  };

  render() {
    const { goalList } = this.props;

    if (!goalList) {
      throw new Error("AddGoalScreen not connected to state");
    }

    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Description</Label>
              <Input value={this.state.description} />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
