import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  updateCount = () => {
    this.setState(state => ({ count: this.state.count + 1 }));  // now is sync
  }

  render() {
    return (
      <div>
        <button color={this.props.color} onClick={this.updateCount}>
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default CounterButton;