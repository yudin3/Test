import './App.css'
import CardList from './Cards/CardList';
import React from 'react'
import Context from './context'
import AddCard from './Cards/AddCard'
import FilterForm from './Cards/FilterForm'
import SortForm from './Cards/SortForm'




function App() {

  const [CardsProperties, setCardsProperties] = React.useState([
    {id: 2, name : "CardNameA", number: '115373', date: '11.06.2021', type: "RUED"},
    {id: 3, name : "CardNameB", number: '177549', date: '14.04.2021', type: "RUSG"},
    {id: 1, name : "CardNameC", number: '154637', date: '27.02.2021', type: "RUED"},
    {id: 5, name : "CardNameD", number: '159364', date: '15.01.2021', type: "RUEX"},
    {id: 4, name : "CardNameE", number: '117394', date: '25.03.2021', type: "RUEX"}
    ])
  
  

  function removeCard(id){
    setCardsProperties(CardsProperties.filter(card => card.id !== id))
  }

  function addCard(id, name, number, date, type){
    setCardsProperties(CardsProperties.concat([{
      id: id,
      name: name,
      number: number,
      date: date, 
      type: type
    }]))
  }



  function sorting(value){
    // eslint-disable-next-line default-case
    switch(value){
      case "Sort by ID: ascending":
        setCardsProperties(CardsProperties.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          return 0;
        }))
      break;
      case "Sort by ID: descending":
        setCardsProperties(CardsProperties.sort(function (a, b) {
          if (a.id > b.id) {
            return -1;
          }
          if (a.id < b.id) {
            return 1;
          }
          return 0;
        }))
      break;
      case "Sort by Number: ascending":
        setCardsProperties(CardsProperties.sort(function (a, b) {
          if (a.number > b.number) {
            return 1;
          }
          if (a.number < b.number) {
            return -1;
          }
          return 0;
        }))
      break;
      case "Sort by Number: descending":
        setCardsProperties(CardsProperties.sort(function (a, b) {
          if (a.number > b.number) {
            return -1;
          }
          if (a.number < b.number) {
            return 1;
          }
          return 0;
        }))
      break;
      case "Sort by Type: ascending":
        setCardsProperties(CardsProperties.sort(function (a, b) {
          if (a.type > b.type) {
            return 1;
          }
          if (a.type < b.type) {
            return -1;
          }
          return 0;
        }))
      break;
      case "Sort by Type: descending":
        setCardsProperties(CardsProperties.sort(function (a, b) {
          if (a.type > b.type) {
            return -1;
          }
          if (a.type < b.type) {
            return 1;
          }
          return 0;
        }))
      break;
    }
        setCardsProperties(CardsProperties.slice())
    
}

  function filterCards(id, number, date, type){
    setCardsProperties(CardsProperties.filter(card => card.id == id && card.number.includes(number) && card.date.includes(date) && card.type == type ))
  }

  return (
    <Context.Provider value={{removeCard}}>
    <section className="section">
      <div className="main-container">
      <div className="grid-container">
        <div className="sorting__container">
          <SortForm onCreate={sorting}></SortForm>
        </div>
        <div className="filters__container">
          <div className="filters__header">
            <h2>Filters</h2>
          </div>
          <div className="filters__content">
            <FilterForm onCreate={filterCards}></FilterForm>
          </div>
        </div> 
          <CardList CardProperties={CardsProperties}></CardList>
          <AddCard onCreate={addCard}></AddCard>
      </div>
      </div>
      
    </section>
    
    </Context.Provider>
  );
}

export default App;
