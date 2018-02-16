import React, { Component } from 'react';
import ClassListCardsPresentation from './presentation';

class ClassListCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
<<<<<<< HEAD
    return (
      <ClassListCardsPresentation 
        classes={this.props.classes}
      />
    )
=======
    return <ClassListCardsPresentation {...this.props} />;
>>>>>>> c00034bde0928338fdf3ce76dce06e1770b63967
  }
}

export default ClassListCards;
