import * as React from "react";
import { Provider } from "mobx-react";
import { createStackNavigator } from "react-navigation";

import GoalList from "./state/Goal/GoalList";
import Goal from "./state/Goal/Goal";
import HomeScreen from "./components/HomeScreen";
import AddGoalScreen from "./components/AddGoalScreen";

const goalStore = new GoalList([new Goal("Foo"), new Goal("Bar")]);

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  AddGoal: {
    screen: AddGoalScreen
  }
});

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider goalList={goalStore}>
        <RootStack />
      </Provider>
    );
  }
}
