import { observable, action } from "mobx";
import Goal from "./Goal";

export default class GoalList {
  @observable goals: Goal[] = [new Goal("Foo")];

  constructor(goals: Goal[]) {
    this.goals = goals;
  }
}
