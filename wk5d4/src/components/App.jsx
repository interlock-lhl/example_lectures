import React, {Component} from 'react';
import QuestionList from '../containers/QuestionList.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header/>

        <QuestionList questions={this.questions}/>

        <Footer />
      </div>
    );
  }
}

export default App;
