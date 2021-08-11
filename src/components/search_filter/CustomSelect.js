import filterIcon from "../../Assets/filter.svg";

function CustomSelect({ active, setActive, value, setValue, options = [] }) {
  return (
    <>
      <div className="filter-output" onClick={() => setActive((prev) => !prev)}>
        <p>{value}</p>
        <img src={filterIcon} alt="filter" />
      </div>

      <div
        className={`filter-options ${active ? "active-filter-options" : ""}`}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option, key) => (
          <label key={key} onClick={() => setActive(false)}>
            <input type="radio" name="filter" value={option} />
            {option}
          </label>
        ))}
      </div>
    </>
  );
}

export default CustomSelect;
