function CharacterDetails({ name, dob, occupation, status, nickname, actor }) {
  return (
    <div className="character-in-detail">
      <p>Name</p>
      <p>:</p>
      <p>{name}</p>

      <p>D.O.B</p>
      <p>:</p>
      <p>{dob}</p>

      <p>Status</p>
      <p>:</p>
      <p>{status}</p>

      <p>Nickname</p>
      <p>:</p>
      <p>{nickname}</p>

      <p>Actor</p>
      <p>:</p>
      <p>{actor}</p>

      <p>Occupation</p>
      <p>:</p>
      <p>{occupation}</p>
    </div>
  );
}

export default CharacterDetails;
