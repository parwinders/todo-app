import React, { Component } from "react";
import Ratings from "./ratings";

class TodoList extends Component {
  state = { isum: [], Percentage: null, rating: "", color: null };

  calcPercentage = (e, index) => {
    let newsum = [...this.state.isum];
    newsum[index] = Number(e.target.innerText);
    this.setState((prevState) => ({
      isum: newsum,
    }));
  };

  setPercentage = () => {
    let total = this.state.isum.reduce((acc, cv) => {
      return acc + cv;
    }, 0);

    let percent = (total / (this.props.courses.length * 5)) * 100;
    this.setState({
      Percentage: percent,
      color: percent > 50 ? "green" : "red",
    });
  };

  render() {
    return (
      <div className='todo-list'>
        <div>
          {this.props.courses.map((course, index) => {
            return (
              <div key={index} className='CR'>
                <div>{course}</div>{" "}
                <Ratings
                  index={index} //do not use index for list which have uid /reoredered/filter/edited/computed/dynamic //https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
                  calcPercentage={this.calcPercentage}
                  rating={this.state.rating}
                />
              </div>
            );
          })}
        </div>
        <div className='res-btn'>
          <button className='btn' onClick={this.setPercentage}>
            Get Percentage
          </button>
          <div className={this.state.color}>
            {this.state.Percentage && <div>{this.state.Percentage}</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
