import { useState, useEffect } from "react";
import store from "../../store/store";
import { FILTER_CARDS } from "../../store/actions";
import "./CardsList.scss";
import Card from "../card/Card";

function CardsList() {
  const [cardList, setCardList] = useState(store.getState().cards);
  const [filterValue, setFilterValue] = useState(store.getState().filter);
  
  useEffect(()=>{
    setCardList(store.getState().cards.filter(filterCards));
  }, [filterValue]);
  
  const filterCards = (card) => {
    let value;
    if (filterValue.length > 0) {
      value = card.name.toLowerCase().includes(filterValue) ? card : null;
    } else {
      value = card;
    }
    return value;
  };

  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value.toLowerCase());
  };

  const handleFilterBlur = () => {
    store.dispatch({ type: FILTER_CARDS, payload: filterValue });
  }

  store.subscribe(() => {
    setCardList(store.getState().cards.filter(filterCards));
  });

  return (
    <div className="main-wrapper">
      <div className="cardsFilter__wrapper">
        <label htmlFor="filter">Search by name: </label>
        <input id="filter" type="text" value={filterValue} onChange={handleChangeFilter} onBlur={handleFilterBlur}/>
      </div>
      <div className="cardsList__wrapper">
        {cardList.length > 0
          ? cardList.map((e) => <Card card={e} key={e._id} />)
          : "There is no any card"}
      </div>
    </div>
  );
}

export default CardsList;
