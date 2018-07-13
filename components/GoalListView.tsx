import * as React from "react";
import { CheckBox, Text, List, ListItem, Body } from "native-base";

import { observer } from "mobx-react";

import { Goal, GoalList } from "../state/Goal";
import { GoalView } from "./GoalView";

interface Props {
  goalList: GoalList;
}

@observer
export default class GoalListView extends React.Component<Props> {
  render() {
    const { goalList } = this.props;
    const { goals } = goalList;
    return (
      <List>
        {goals.map((goal: Goal) => <GoalView goal={goal} key={goal.id} />)}
      </List>
    );
  }
}
