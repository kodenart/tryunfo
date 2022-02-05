import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
  render() {
    return (
      <form style={ { display: 'flex', flexDirection: 'column', width: '30vw' } }>
        <h1>just to test</h1>
        Nome
        <Input iType="text" testId="name-input" />
        Descrição
        <Input iType="text" testId="description-input" />
        Atributo 1
        <Input iType="number" testId="attr1-input" />
        Atributo 2
        <Input iType="number" testId="attr2-input" />
        Atributo 3
        <Input iType="number" testId="attr3-input" />
        ImagemSLA
        <Input iType="text" testId="image-input" />
        Raridade
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <Input iType="checkbox" testId="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
