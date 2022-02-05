import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { iType, testId } = this.props;
    return (
      <input type={ iType } data-testid={ testId } />
    );
  }
}

Input.propTypes = {
  iType: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
