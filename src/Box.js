import { Component } from "react";
import CardS from "./box.module.css";

export class Box extends Component {
  constructor() {
    super();

    this.state = {
      cardColor: false,
    };

    this.changeGame = this.changeGame.bind(this);
  }

  changeGame() {
      this.setState({ cardColor: !this.state.cardColor });
  }

  render() {
    return this.state.cardColor ? (
      <div className={`${CardS.box2}`} onClick={this.changeGame}></div>
    ) : (
      <div className={`${CardS.box1}`} onClick={this.changeGame}></div>
    );
  }
}
