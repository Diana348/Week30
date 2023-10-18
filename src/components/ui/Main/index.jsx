import React, { useContext, useEffect, useState } from "react";
import "./main.css";
import wordsArray from "../../../data/data";
import WordRow from "../WordRow";
import { WordsContext } from "../../context/WordsContext";

const WordsTable = () => {
  const [data, setData] = useState(wordsArray);

  const changeWordsData = (
    id,
    wordText,
    wordTranscription,
    wordTranslation
  ) => {
    const updatedData = data.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          word: wordText,
          transcription: wordTranscription,
          translation: wordTranslation,
        };
      }
      return elem;
    });
    setData(updatedData);
  };

  const dataContext = useContext(WordsContext);
  console.log(dataContext);
  useEffect(() => {
    setData(dataContext.words);
  }, [dataContext]);

  if (dataContext.isLoading) return <h1>LOADING</h1>;

  if (dataContext.error) return <h1>ERROR</h1>;

  return (
    <div className="mainContainer">
      <div className="mainTitle">
        <h2>Слово</h2>
        <h2>Транскрипция</h2>
        <h2>Перевод</h2>
      </div>
      <div className="mainWordsTable">
        {data.map((word) => (
          <WordRow
            key={word.id}
            word={word}
            changeTableWords={changeWordsData}
            isEditable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default WordsTable;
