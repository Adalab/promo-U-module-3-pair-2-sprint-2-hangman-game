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

  const failedLetters = userLetters.filter((letter) => !word.includes(letter));
  console.log(failedLetters);
  const numberOfErrors = failedLetters.length;

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch('https://dev.adalab.es/api/random/word')
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

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) => {
      return (
        <li key={index} className='letter'>
          {userLetters.includes(eachLetter) ? eachLetter : ''}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    return userLetters
      .filter((eachLetter) => (word.includes(eachLetter) ? '' : eachLetter))
      .map((eachLetter, index) => (
        <li key={index} className='letter'>
          {eachLetter}
        </li>
      ));
  };

  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <Letters lastLetter={lastLetter} />
        <Dummy numberOfErrors={numberOfErrors} />
      </main>
    </div>
  );
}

export default App;
