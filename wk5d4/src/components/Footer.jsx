import React, {Component} from 'react';

class Footer extends Component {

  componentWillMount () {
    this.setState( {seconds: 0});
    setInterval(this.updateTime.bind(this), 1000);
  }

  updateTime() {
    this.setState( {seconds: this.state.seconds + 1})
  }

  render() {
    return (
      <footer>
        <p>This page has been running for {this.state.seconds} seconds</p>
      </footer>
    );
  }
}
export default Footer;
