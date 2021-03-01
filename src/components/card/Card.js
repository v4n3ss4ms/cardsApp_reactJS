import { useHistory } from "react-router-dom";
import store from "../../store/store";
import { REMOVE_CARD } from "../../store/actions";
import "./Card.scss";
import analytics from "../../analytics/analytics";

const REMOVE_EVENT = "remove_card";
const EDIT_EVENT = "edit_card";

function Cards({ card }) {
  let history = useHistory();
  const removeCard = () => {
    analytics(REMOVE_EVENT, { id: card._id, name: card.name });
    store.dispatch({ type: REMOVE_CARD, payload: card });
  };
  const editCard = () => {
    analytics(EDIT_EVENT, { id: card._id });
    history.push(`/edit/${card._id}`);
  };
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={card.imageUrl} alt={card.name} />
      </div>
      <div className="card__btn-wrapper">
        <button className="card__btn card__btn--edit" onClick={editCard}>
          Edit
        </button>
        <button className="card__btn card__btn--remove" onClick={removeCard}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cards;
