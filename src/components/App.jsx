import '../styles/layout/App.scss';
import '../fonts/KgTenThousandReasons-R1ll.ttf';
import Header from './Header/Header';
import Dummy from './Dummy/Dummy';
import Letters from './Letters/Letters';
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Instructions from './Instructions/Instructions';
import Options from './Options/Options';
import Loading from './Loading/Loading' ;

function App() {
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [inLoading, setInLoading] = useState(true);


  const updateInput = (value) => {
    setWord(value);
    if (userLetters !== '') {
      setLastLetter('');
      setUserLetters([]);
    }
  };


  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch('https://dev.adalab.es/api/random/word')
      .then((response) => response.json())
      .then((Data) => {
        console.log(Data);
        // Cuando la API responde, guardamos los datos en el estado para que se vuelva a renderizar el componente
        setWord(Data.word);
        setInLoading(false);
      });
  }, []);

  const handleLetter = (value) => {
    const letterPress = value.toLowerCase();
    const regex = /^[a-z]+$/;
    if (regex.test(letterPress) || letterPress === '') {
      setLastLetter(letterPress);
      if (letterPress !== '') {
        setUserLetters([...userLetters, letterPress]);
      }
    } else if (
      letterPress === 'Backspace' ||
      letterPress === ' ' ||
      letterPress === 'Enter'
    ) {
      setLastLetter('');
    }
  };

  return (
    <div className="page">
      <Header />
      <Loading inLoading={inLoading} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <Letters
                  handleLetter={handleLetter}
                  lastLetter={lastLetter}
                  word={word}
                  userLetters={userLetters}
                />
              </section>
            }
          />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/options"
            element={<Options updateInput={updateInput} word={word} />}
          />
        </Routes>
        <Dummy word={word} userLetters={userLetters} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
