import { createContext, useEffect, useState } from "react";

const WordsContext = createContext();

function WordsContextProvider({ children }) {
  const [words, setWords] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words`)
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
        setError(false);
      })
      .catch((e) => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const context = {
    words,
    error,
    isLoading,
  };

  return (
    <WordsContext.Provider value={context}>{children}</WordsContext.Provider>
  );
}

export { WordsContext, WordsContextProvider };
