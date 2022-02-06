import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { iType, testId, onChange, value, checked, stateName } = this.props;
    return (
      <input
        type={ iType }
        data-testid={ testId }
        value={ value }
        checked={ checked }
        name={ stateName }
        onChange={ onChange }
      />
    );
  }
}

Input.defaultProps = {
  checked: undefined,
  value: '',
};

Input.propTypes = {
  iType: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  stateName: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};
