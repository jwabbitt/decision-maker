import React, {Component} from 'react';
import AddQuestion from './components/addQuestion'
import QuestionList from './components/questionList'

export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <h1>Decision Maker</h1>
        <AddQuestion poop="fart"/>
        <QuestionList/>
      </div>
    );
  }
}
