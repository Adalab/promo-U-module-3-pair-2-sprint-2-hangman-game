// import viteLogo from '/vite.svg'
import '../styles/layout/App.scss';
import '../fonts/KgTenThousandReasons-R1ll.ttf';
import Header from './Header/Header'
import Dummy from './Dummy/Dummy'
import Letters from './Letters/Letters'
import ls from '../services/LocalStorage'
import { useEffect, useState } from 'react';

function App() {
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  




   useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch('https://dev.adalab.es/api/random/word')
      .then((response) => response.json())
      .then((Data) => {
        console.log(Data);
        // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
        setWord(Data.word);
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
    <div className='page'>
      <Header />
      <main className='main'>
        <Letters handleLetter={handleLetter} lastLetter={lastLetter} word={word} userLetters={userLetters} />
        <Dummy  word={word} userLetters={userLetters}/>
      </main>
    </div>
  );
}

export default App;
