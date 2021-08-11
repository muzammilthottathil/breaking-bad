import "../styles/quotes.css";

function Quotes({ loading, quotes = [] }) {
  if (loading) return <p className="loading">Loading....</p>;

  if (!!quotes.length)
    return (
      <div className="quotes-container">
        <h1 className="heading">Quotes</h1>

        <div className="quotes-list">
          {quotes.map((quote) => (
            <p key={quote?.quote_id} className="quote">
              {quote?.quote}
            </p>
          ))}
        </div>
      </div>
    );
  else return <p className="not-found">Not Quotes Found</p>;
}

export default Quotes;
