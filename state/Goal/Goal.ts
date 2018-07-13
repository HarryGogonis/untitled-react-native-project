import { observable, action } from "mobx";

export default class Goal {
  id = Math.random();
  @observable title: string = "";
  @observable isComplete: boolean = false;

  constructor(title: string) {
    this.title = title;
  }

  @action.bound
  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
