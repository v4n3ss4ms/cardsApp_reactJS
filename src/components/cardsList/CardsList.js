import { useState, useEffect } from "react";
import store from "../../store/store";
import "./CardsList.scss";
import Card from "../card/Card";

function CardsList() {
  const [cardList, setCardList] = useState(store.getState().cards);
  
  const [filterValue, setFilterValue] = useState(store.getState().filter);

  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };

  /*
  useEffect(()=>{
    setCardList(store.getState().cards.filter(filterCards));
  }, [setFilterValue]);
  
  const filterCards = (card) => {
    console.log(`filterValue: ${filterValue}`);
    return filterValue.length > 0;
  };
  

  store.subscribe(() => {
    setCardList(store.getState().cards.filter(filterCards));
  });
  */

  store.subscribe(() => {
    setCardList(store.getState().cards);
  });

  return (
    <div className="main-wrapper">
      <div className="CardsFilter">
        <input type="text" value={filterValue} onChange={handleChangeFilter}/>
      </div>
      <div className="cardsList__wrapper">
        {cardList.length > 0
          ? cardList.map((e) => <Card card={e} key={e._id} />)
          : "there is no any card"}
      </div>
    </div>
  );
}

export default CardsList;
