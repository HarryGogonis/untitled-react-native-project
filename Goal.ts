export default class Goal {
  public title: string;
  public isComplete: boolean = false;

  constructor(title: string) {
    this.title = title;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
