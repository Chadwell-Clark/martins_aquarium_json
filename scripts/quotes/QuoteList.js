import { Quote } from "./Quote.js";
import { getQuote } from "./Quotedata.js";

export  const QuoteList = () => {
    const allQuotes = getQuote();
    const QuoteDOMLocation = document.querySelector("#quotes");
    let quoteHTML = "";
    for (const quote of allQuotes) {
        quoteHTML += Quote(quote);
    }
    QuoteDOMLocation.innerHTML += quoteHTML;
};