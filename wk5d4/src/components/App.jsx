import React, {Component} from 'react';
import QuestionList from '../containers/QuestionList.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import SocketService from '../services/socket.js'

class App extends Component {

  componentWillMount() {
    this.questionsUpdated([]);
    SocketService.on(this.questionsUpdated.bind(this));
  }

  questionsUpdated(questions) {
    this.setState( { questions: questions});
  }

  render() {
    return (
      <div className="container">
        <Header/>

        <QuestionList questions={this.state.questions}/>

        <Footer />
      </div>
    );
  }
}

export default App;
