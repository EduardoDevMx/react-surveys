import React from "react";
import './survey.css';
const axios = require('axios');

var data = require('../../questions.json');

class Survey extends React.Component {

  handleSubmit(formValue) {
    axios({
      method: 'post',
      url: '/survey/12345',
      data: formValue
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <form onSubmit={this.handleSubmit}>
              {data.map(query => 
              <div className="form-group">
                <label for={query.id}>{query.label}</label>
                <input type={query.type} className="form-control" id={query.id} />
              </div>
              )}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Survey