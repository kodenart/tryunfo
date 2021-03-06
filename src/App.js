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
    this.deleteCard = this.deleteCard.bind(this);
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
          hasTrunfo: true,
          isSaveButtonDisabled: true,
        };
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
        isSaveButtonDisabled: true,
      };
    });
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }, this.saveButtonCheck);
  }

  deleteCard(deletingCard) {
    const { cardList } = this.state;
    const newList = cardList.filter((card) => card !== deletingCard);
    if (deletingCard.cardTrunfo) {
      this.setState({ cardList: newList, hasTrunfo: false });
    } else {
      this.setState({ cardList: newList });
    }
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
            key="previewCard"
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
        <div className="baralho">
          {cardList
            .map((card) => (
              <div key={ `${card.cardName} div` } className="eachCard">
                <Card key={ card.cardName } { ...card } />
                <button
                  style={ { backgroundColor: 'red' } }
                  type="button"
                  key={ `${card.cardName} button` }
                  data-testid="delete-button"
                  onClick={ () => { this.deleteCard(card); } }
                >
                  Excluir

                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
