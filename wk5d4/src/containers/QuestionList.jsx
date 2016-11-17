import React, {Component} from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question.jsx'

class QuestionList extends Component {
  render() {
    var questions = this.props.questions.sort(function(a,b) {
      return a.id < b.id ? 1 : -1;
    });
    questions = questions.slice(0,5);
    return (
      <ul className="questions">
      {questions.map(question =>
        <Question text={question.text} who={question.who} key={question.id}/>
      )}
      </ul>
    );
  }
}

QuestionList.propTypes = {
  questions: React.PropTypes.array
}

const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = ({

})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
