import { Link } from "react-router-dom";

const QuotesUI = ({ quote }: any) => {
  return (
    <div key={quote.quote_id}>
      <Link to={`/quotes/${quote.quote_id}`}> 
      <q>{quote.quote}</q>
      </Link>
      <h4>{quote.author}</h4>
    </div>
  );
};

export default QuotesUI;
