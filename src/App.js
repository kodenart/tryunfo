import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

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
      cardList: [],
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.saveButtonCheck = this.saveButtonCheck.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick() {
    this.setState((prevState) => {
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
        cardRare, cardTrunfo } = this.state;
      const newCard = { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo };
      // if a "trunfo" card is added to the deck, hasTrunfo becomes true
      if (cardTrunfo) {
        return {
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
          cardList: [...prevState.cardList, newCard],
          hasTrunfo: true };
      }
      return {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        cardList: [...prevState.cardList,
          newCard],
      };
    });
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
      .every((num) => (num >= minV && num <= maxV))
      && inputNumArr.reduce((acc, cur) => acc + cur) <= maxSum;

    this.setState(() => ({ isSaveButtonDisabled: !(firstKindCheck && atributesCheck) }));
  }

  render() {
    const {
      cardName, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
      cardDescription, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      cardList,
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
            onSaveButtonClick={ this.onSaveButtonClick }
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
        <div id="baralho">
          {cardList.map((card) => <Card key={ card.cardName } { ...card } />)}
        </div>
      </div>
    );
  }
}

export default App;
