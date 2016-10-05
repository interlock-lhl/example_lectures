import React, {Component, PropTypes} from 'react';

class Question extends Component {

  render() {
    return (
      <li>
        {this.props.who} : {this.props.text}
      </li>
    );
  }
}

export default Question;
