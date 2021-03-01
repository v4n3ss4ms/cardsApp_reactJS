import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import store from "../../store/store";
import { EDIT_CARD } from "../../store/actions";
import "./CardDetails.scss";

function CardDetails() {
  const { id } = useParams();
  let history = useHistory();
  const cardList = store.getState().cards;
  const editedCard = cardList.find((e) => e._id === id);
  const [cardName, setCardName] = useState(editedCard.name);
  const [cardImageUrl, setCardImageUrl] = useState(editedCard.imageUrl);
  const [errorName, setErrorName] = useState(null);
  const [errorImageUrl, setErrorImageUrl] = useState(null);

  const handleNameChange = (e) => {
    setCardName(e.target.value);
  };
  const handleImageUrlChange = (e) => {
    setCardImageUrl(e.target.value);
  };

  const handleNameBlur = () => {
    const isEmpty = !(cardName.length > 0);
    setErrorName(isEmpty);
  };
  const handleImageUrlBlur = () => {
    const isEmpty = !(cardImageUrl.length > 0);
    setErrorImageUrl(isEmpty);
  };

  const cancelChanges = () => goBack();
  const goBack = () => history.push("/");
  const saveChanges = () => {
    const newCard = { ...editedCard, name: cardName, imageUrl: cardImageUrl };
    store.dispatch({ type: EDIT_CARD, payload: newCard });
    goBack();
  };

  return (
    <div className="contentContainer cardDetails__wrapper">
      <p>id: {editedCard._id}</p>
      <p>
        <label htmlFor="name">name: </label>
        <input id="name" type="text" value={cardName} onChange={handleNameChange} onBlur={handleNameBlur}/>
      </p>
      {errorName ? <p>Name field is required</p> : null}

      <p>
        <label htmlFor="imageUrl">imageUrl: </label>
        <input id="imageUrl" name="imageUrl" type="text" value={cardImageUrl} onChange={handleImageUrlChange} onBlur={handleImageUrlBlur}/>
      </p>
      {errorImageUrl ? <p>ImageUrl field is required</p> : null}

      <button onClick={cancelChanges}>Cancel changes</button>
      <button onClick={saveChanges}>Save changes</button>
    </div>
  );
}

export default CardDetails;
