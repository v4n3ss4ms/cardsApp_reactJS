import { useState } from "react";
import store from "../../store/store";
import "./CardsList.scss";
import Card from "../card/Card";
import CardsFilter from "../cardsFilter/CardsFilter";

function CardsList() {
  const [cardList, setCardList] = useState(store.getState().cards);
  store.subscribe(() => setCardList(store.getState().cards));

  return (
    <div className="contentContainer">
      <CardsFilter />
      <div className="cardsList__wrapper">
        {cardList.length > 0
          ? cardList.map((e) => <Card card={e} key={e._id} />)
          : "there is no any card"}
      </div>
    </div>
  );
}

export default CardsList;
