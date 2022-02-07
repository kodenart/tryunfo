import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Form extends Component {
  render() {
    const {
      cardName, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
      cardDescription, cardTrunfo, hasTrunfo, onInputChange,
      onSaveButtonClick, isSaveButtonDisabled,
    } = this.props;

    // if there's an trunfo in the deck already, the component is not rendered
    let trunfoCheckbox = <p>Você já tem um Super Trunfo em seu baralho</p>;
    if (!hasTrunfo) {
      trunfoCheckbox = (<Input
        iType="checkbox"
        testId="trunfo-input"
        checked={ cardTrunfo }
        onChange={ onInputChange }
        stateName="cardTrunfo"
      />);
    }
    return (
      <form
        style={ { display: 'flex', flexDirection: 'column', width: '30vw' } }
      >
        <h1>Crie sua carta!</h1>
        Nome
        <Input
          iType="text"
          testId="name-input"
          value={ cardName }
          onChange={ onInputChange }
          stateName="cardName"
        />
        Descrição
        <Input
          iType="text"
          testId="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          stateName="cardDescription"
        />
        Atributo 1
        <Input
          iType="number"
          testId="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          stateName="cardAttr1"
        />
        Atributo 2
        <Input
          iType="number"
          testId="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          stateName="cardAttr2"
        />
        Atributo 3
        <Input
          iType="number"
          testId="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          stateName="cardAttr3"
        />
        ImagemSLA
        <Input
          iType="text"
          testId="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          stateName="cardImage"
        />
        Raridade
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
        >
          <option value="">Selecione uma raridade</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        {trunfoCheckbox}
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // checksTheSaveButton: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
