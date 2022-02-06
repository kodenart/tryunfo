import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const {
      cardName, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
      cardDescription, cardTrunfo,
    } = this.props;

    const trunfo = cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null;

    return (
      <div>
        <h1>ameno dorime</h1>
        <p data-testid="name-card">{cardName}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {trunfo}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
