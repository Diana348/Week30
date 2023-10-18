import { useState } from "react";
import "./wordRow.css";
import { BsPencilFill } from "react-icons/bs";
import { RxCheck } from "react-icons/rx";

const WordRow = ({ word, changeTableWords, isEditable = false }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [wordData, setWordData] = useState(word);
  const [errors, setErrors] = useState({
    word: "",
    transcription: "",
    translation: "",
  });

  const changeInputValue = (e) => {
    const { name, value } = e.target;
    setWordData({ ...wordData, [name]: value });
  };

  const validateForm = () => {
    const tempErrors = {
      word: "",
      transcription: "",
      translation: "",
    };
    if (!wordData.word) {
      tempErrors.word = "Word is empty";
    }
    if (!wordData.transcription) {
      tempErrors.transcription = "transcription is empty";
    }
    if (!wordData.translation) {
      tempErrors.translation = "translation is empty";
    }
    setErrors(tempErrors);

    return Object.values(tempErrors).every((error) => !error);
  };

  const saveChanges = () => {
    if (validateForm()) {
      changeTableWords(
        word.id,
        wordData.word,
        wordData.transcription,
        wordData.translation
      );
      setIsDisabled(true);
    }
  };

  return (
    <div className="mainTable">
      <input
        onChange={(e) => changeInputValue(e)}
        disabled={isDisabled}
        className="words"
        style={errors.word ? { border: "2px solid red" } : {}}
        value={wordData.word}
        name="word"
      />
      <input
        onChange={(e) => changeInputValue(e)}
        disabled={isDisabled}
        className="words"
        style={errors.transcription ? { border: "2px solid red" } : {}}
        name="transcription"
        value={wordData.transcription}
      />
      <input
        onChange={(e) => changeInputValue(e)}
        disabled={isDisabled}
        className="words"
        style={errors.translation ? { border: "2px solid red" } : {}}
        name="translation"
        value={wordData.translation}
      />
      {isEditable && (
        <>
          <button
            className="buttonChangeWord"
            onClick={() => setIsDisabled(false)}
          >
            <BsPencilFill />
          </button>
          <button className="buttonSaveWord" onClick={saveChanges}>
            <RxCheck />
          </button>
        </>
      )}
    </div>
  );
};

export default WordRow;
