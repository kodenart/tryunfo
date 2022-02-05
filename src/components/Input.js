import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { iType, testId, onChange, value, checked } = this.props;
    return (
      <input
        type={ iType }
        data-testid={ testId }
        onChange={ onChange }
        value={ value }
        checked={ checked }
      />
    );
  }
}

Input.defaultProps = {
  checked: undefined,
};

Input.propTypes = {
  iType: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  // id: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};
