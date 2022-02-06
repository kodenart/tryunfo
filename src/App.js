import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.saveButtonCheck = this.saveButtonCheck.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }, this.saveButtonCheck);
  }

  saveButtonCheck() {
    // getting the current state
    const {
      cardName, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
      cardDescription,
    } = this.state;
      // creating arrays with the data
    const inputTextArr = [cardName, cardDescription, cardImage, cardRare];
    const inputNumArr = [parseInt(cardAttr1, 10),
      parseInt(cardAttr2, 10), parseInt(cardAttr3, 10)];
      // values to check the atributes
    const minV = 0;
    const maxV = 90;
    const maxSum = 210;
    // boolean values
    const firstKindCheck = inputTextArr.every((value) => value !== '');
    const atributesCheck = inputNumArr
      .every((num) => (num > minV && num <= maxV))
      && inputNumArr.reduce((acc, cur) => acc + cur) <= maxSum;

    this.setState(() => ({ isSaveButtonDisabled: !(firstKindCheck && atributesCheck) }));
  }

  render() {
    const {
      cardName, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
      cardDescription, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div style={ { display: 'flex', justifyContent: 'space-around' } }>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onChangeHandler }
            // checksTheSaveButton={ this.saveButtonCheck }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
