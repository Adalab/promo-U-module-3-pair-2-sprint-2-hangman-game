// import viteLogo from '/vite.svg'
import "../styles/App.scss";
import "../fonts/KgTenThousandReasons-R1ll.ttf";
import { useEffect, useState } from "react";

function App() {
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);

  const failedLetters = userLetters.filter((letter) => !word.includes(letter));
  console.log(failedLetters);
  const numberOfErrors = failedLetters.length;

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch("https://dev.adalab.es/api/random/word") 
      .then((response) => response.json())
      .then((Data) => {
        // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
        setWord(Data.word);
      });
  }, []);

  const handleLetter = (ev) => {
    ev.preventDefault();
    const letterPress = ev.target.value.toLowerCase();
    const regex = /^[a-z]+$/;
    if (regex.test(letterPress) || letterPress === "") {
      setLastLetter(letterPress);
      if (letterPress !== "") {
        setUserLetters([...userLetters, letterPress]);
      }
    } else if (
      letterPress === "Backspace" ||
      letterPress === " " ||
      letterPress === "Enter"
    ) {
      setLastLetter("");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    return wordLetters.map((eachLetter, index) => {
      return (
        <li key={index} className="letter">
          {userLetters.includes(eachLetter) ? eachLetter : ""}
        </li>
      );
    });
  };

 

  const renderErrorLetters = () => {

    return userLetters
      .filter((eachLetter) => (word.includes(eachLetter) ? "" : eachLetter))
      .map((eachLetter, index) => (
        <li key={index} className="letter">
          {eachLetter}
        </li>
      ));
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
