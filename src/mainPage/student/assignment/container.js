import React, { Component } from 'react';
import StudentAssignmentPresentation from './presentation';

class StudentAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockAssignments: []
    };
  }
  render() {
    return <StudentAssignmentPresentation assignments={this.mockAssignments} />;
  }
}

export default StudentAssignment;
