import { useHistory } from "react-router-dom";
import arrow from "../../Assets/arrow_top.svg";

function CharacterCard({ id, img, name, occupation, birthday, status }) {
  const history = useHistory();

  return (
    <div className="character-card" onClick={() => history.push(`/${id}`)}>
      <img className="character-image" src={img} alt={name} />
      <div className="card-content">
        <div className="character-name">
          <p>{name}</p>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="character-details">
          <p>D.O.B</p>
          <p>:</p>
          <p>{birthday}</p>

          <p>status</p>
          <p>:</p>
          <p>{status}</p>

          <p>Occupation</p>
          <p>:</p>
          <p>{occupation?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
