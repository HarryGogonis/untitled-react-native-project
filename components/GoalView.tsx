import React from "react";
import { observer } from "mobx-react";

import { CheckBox, Text, ListItem, Body } from "native-base";

export const GoalView = observer(({ goal }) => (
  <ListItem key={goal.title}>
    <CheckBox checked={goal.isComplete} onPress={() => goal.toggleComplete()} />
    <Body>
      <Text>{goal.title}</Text>
    </Body>
  </ListItem>
));
