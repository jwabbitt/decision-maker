import React, {Component} from 'react';

export default class AddQuestion extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <label>Add a Question</label>
        <input type="text" placeholder={this.props.poop}/>
        <button type="submit">Add Question</button>
      </div>
    );
  }
}
