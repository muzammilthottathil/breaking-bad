import { Link } from "react-router-dom";
import arrow from "../Assets/arrow_top.svg";

function CharacterNav({ name, appearance = [] }) {
  return (
    <div className="character-nav">
      <div className="back-nav">
        <Link to="/">
          <img src={arrow} alt="back" />
        </Link>
        <h1>{name}</h1>
      </div>

      <div className="appearance">
        <p>Appearance</p>
        <div>
          {!!appearance?.length &&
            appearance?.map((item, key) => <p key={key}>{item}</p>)}
        </div>
      </div>
    </div>
  );
}

export default CharacterNav;
