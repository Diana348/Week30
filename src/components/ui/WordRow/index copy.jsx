import { useState } from "react";
import "./wordRow.css";
import { BsPencilFill } from "react-icons/bs";
import { RxCheck } from "react-icons/rx";

const WordRow = ({ word, changeTableWords }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [wordText, setWordText] = useState(word.word);
  const [wordTranscription, setWordTranscription] = useState(
    word.transcription
  );
  const [wordTranslation, setWordTranslation] = useState(word.translation);
  console.log(word);
  const editWord = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  };

  const changeWord = (e) => {
    setWordText(e.target.value);
  };

  const changeTranscription = (e) => {
    setWordTranscription(e.target.value);
  };

  const changeTranslation = (e) => {
    setWordTranslation(e.target.value);
  };

  const saveChanges = () => {
    changeTableWords(word.id, wordText, wordTranscription, wordTranslation);
    editWord();
  };

  return (
    <form className="mainTable">
      <input
        onChange={(e) => changeWord(e)}
        disabled={isDisabled}
        className="words"
        value={wordText}
      />
      <input
        onChange={(e) => changeTranscription(e)}
        disabled={isDisabled}
        className="words"
        value={wordTranscription}
      />
      <input
        onChange={(e) => changeTranslation(e)}
        disabled={isDisabled}
        className="words"
        value={wordTranslation}
      />
      <button className="buttonChangeWord" onClick={editWord}>
        <BsPencilFill />
      </button>
      <button className="buttonSaveWord" onClick={saveChanges}>
        <RxCheck />
      </button>
    </form>
  );
};

export default WordRow;
