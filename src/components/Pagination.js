import "../styles/pagination.css";

function Pagination({
  currentPage,
  characterPerPage,
  totalCharacters,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / characterPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers?.map((number) => (
        <button
          className={`pagination-btn ${
            currentPage === number ? "active-page" : ""
          }`}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
