import React, { Component } from "react";

class Counter extends Component {
  //컴포넌트 업데이트 후 호출
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount')
    //컴포넌트 없애기전 사용 메모리 초기화해 메모리 누수방지 가능
  }

  styles = {
    fontWeight: "bold",
    fontSize: 10
  };

  render() {
    console.log('Counter - Rendered');

    return (
      //React.Fragment div가 중복되지 않게 해줌.
      <React.Fragment>
        <h4>{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  };

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
