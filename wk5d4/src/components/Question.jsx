import React, {Component, PropTypes} from 'react';

class Question extends Component {

  render() {
    return (
      <li>
        <img src="https://api.adorable.io/avatars/75/{this.props.who}.png" alt="{this.props.who}" /> : {this.props.text}
      </li>
    );
  }
}

Question.propTypes = {
  who: React.PropTypes.string,
  text: React.PropTypes.string
}


export default Question;
