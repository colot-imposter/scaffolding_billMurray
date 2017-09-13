import React, {Component} from 'react';
import actors from '../data/actors.js'

class Form extends Component {
  render() {
    return (
      <form className="example-form">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
      </form>
    )
  }
}
export default Form
