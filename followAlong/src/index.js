import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Class methods to update state
  constructor() {
    super()
    this.state = {
      groceries: groceries
    }
  }

  //this
  //useState 

  //this.setState()
  // toggleItem() {
  //   //...
  // }
  toggleItem = (itemId) => {
    // get itemId from <Item /> clicked on. 
    // map over array of groceries
    // when we find the item we clicked on, toggle the purchased field
    // otherwise return the item untouched

    this.setState({
      groceries: this.state.groceries.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          }
        }
        return item;
      })
    })
  }

  addItem = (itemText) => {
    //create the new item object
    //add it to the groceries array => new array
    //setState to the new groceries array.
    const newItem = {
      name: itemText,
      id: Date.now(),
      purchased: false
    }

    const newGroceries = [...this.state.groceries, newItem]

    this.setState({
      groceries: newGroceries
    })
  }

  clearPurchased = () => {
    // if item is purchased (item.purchased is true) the filter out the item
    this.setState({
      groceries: this.state.groceries.filter(item => !item.purchased)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm addItem={this.addItem}/>
         </div>
        <GroceryList 
              groceries={this.state.groceries} 
              toggleItem={this.toggleItem}
              clearPurchased={this.clearPurchased}
              />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);