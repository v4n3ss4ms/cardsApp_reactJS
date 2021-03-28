import { useState, useEffect } from "react";
import store from "../../store/store";
import { FILTER_CARDS } from "../../store/actions";
import "./CardsList.scss";
import Card from "../card/Card";

function CardsList() {
  const [filterValue, setFilterValue] = useState(store.getState().filter);
  const [cardList, setCardList] = useState(store.getState().filteredCards);
  
  const handleChangeFilter = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterValue(text);
    store.dispatch({ type: FILTER_CARDS, payload: text });
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCardList(store.getState().filteredCards);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="main-wrapper">
      <div className="cardsFilter__wrapper">
        <label htmlFor="filter">Search by name: </label>
        <input id="filter" type="text" value={filterValue} onChange={handleChangeFilter} />
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
