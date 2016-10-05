import React, {Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question.jsx'

class QuestionList extends Component {
  render() {
    // var questionNodes = this.props.data.map(function(question) {
    //   return (
    //     <Question author={question.author} key={question.id}>
    //       {question.text}
    //     </Question>
    //   );
    // });
    var questions = this.props.questions;
    return (
      <ul>
      {questions.map(question =>
        <Question text={question.text} who={question.who} key={question.id}/>
      )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = ({

})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
