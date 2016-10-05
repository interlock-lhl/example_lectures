import React, {Component} from 'react';
import { connect } from 'react-redux'
import QuestionList from './QuestionList.jsx'

class App extends Component {
  componentDidMount() {
    // dispatch(fetchQuestionsIfNeeded(selectedReddit))
  }
  render() {
    return (
      <div class="questionList">
        <QuestionList questions={this.questions}/>
      </div>
    );
  }
}
export default App;
