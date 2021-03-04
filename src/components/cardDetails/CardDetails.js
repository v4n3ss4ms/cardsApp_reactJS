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
    <div className="main-wrapper main-wrapper--details">
      <div className="card-detail">
        <h2 className="card-detail__title">id: {editedCard._id}</h2>
        <div className="card-detail__form">
          <div className="card-detail__form-item">
            <label htmlFor="name">name: </label>
            <input id="name" type="text" value={cardName} onChange={handleNameChange} onBlur={handleNameBlur}/>
            {errorName ? <div className="msg-error"><p>Name field is required</p></div> : null}
          </div>

          <div className="card-detail__form-item">
            <label htmlFor="imageUrl">imageUrl: </label>
            <input id="imageUrl" name="imageUrl" type="text" value={cardImageUrl} onChange={handleImageUrlChange} onBlur={handleImageUrlBlur}/>
            {errorImageUrl ? <div className="msg-error"><p>ImageUrl field is required</p></div> : null}
          </div>
          <div className="btn-wrapper">
            <button  className="btn-action btn-action--primary" onClick={saveChanges} disabled={errorName || errorImageUrl ? 'disabled' : null} >Save changes</button>
            <button className="btn-action btn-action--secondary" onClick={cancelChanges}>Cancel changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
