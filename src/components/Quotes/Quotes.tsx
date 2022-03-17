import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { useEffect } from "react";
import { fetchAllQuotes } from "store/Quotes/QuotesSlice";
import Loading from "components/Loading/Loading";
import QuotesUI from "./QuotesUI";

const Quotes = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.quotes.items);
  const status = useSelector((state: RootState) => state.quotes.status);

  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);

  if (status === "failed") {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Quotes</h1>
      {status === "pending" ? <Loading /> : null}
      {status === "succeeded" &&
        data.map((quote: any) => <QuotesUI quote={quote} />)}
    </div>
  );
};

export default Quotes;
