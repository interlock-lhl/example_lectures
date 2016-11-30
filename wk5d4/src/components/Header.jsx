import React, {Component} from 'react';

class Header extends Component {

  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

Header.defaultProps = {
  title: 'Slack Question Bot'
};

Header.propTypes = {
  title: React.PropTypes.string
};

export default Header;
